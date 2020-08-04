

    const express = require('express');
    const bodyParser = require('body-parser');
    var Client = require('ftp');
    var fs = require('fs');
    
    const app = express();
    const port = process.env.PORT || 5000;
    
    
    const morgan = require('morgan');
    const router = require("express").Router();
    const path = require("path");
    
    // aws bucket
    const AWS = require('aws-sdk');
    require('dotenv').config();
    const Busboy = require('busboy');
    const busboy = require('connect-busboy');
    const busboyBodyParser = require('busboy-body-parser')
    const cors = require('cors')
    app.use(cors());
    
    app.use(morgan('dev'));
    
    app.use(busboy())
    app.use(busboyBodyParser())
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    
    
    var pg = require('pg');
    
    var conString = process.env.CONNSTRING
    var client = new pg.Client(conString);
    client.connect(function (err) {
      if (err) {
        return console.error('could not connect to postgres', err);
      }
    });
    
    
    
    //   app.get('/', function(req, res){
    //     res.send({answer: "hello world!"});
    // })
    
    
    // GET CUSTOM INVENTORY
    app.options('/api/posts', cors())
    app.get('/api/posts', cors(), function (req, response) {
    
      client.query(
        "SELECT * from blog_posts", (error, results) => {
          if (error) {
            throw error
          }
          var data = results.rows
          response.send(JSON.stringify({ data }));
        }
      );
    })
    
    app.get('/api/posts/:id', cors(), function (req, response) {
      // var gun_id = req.params.id;
      const data = {
        id: req.params.id
      }
    
      const query = `SELECT * from blog_posts WHERE id = $1`
      const values = [data.id]
      client.query(query, values, (error, results) => {
        if (error) {
          throw error
          // results.status(500)
        }
        var data = results.rows
        response.send(JSON.stringify({ data }));
      }
      );
    })
    
    
    //    POST CUSTOM INVENTORY
    let posts = []
    app.post('/api/post', function (req, res) {
      console.log("keys")
      const data = {
        title: req.body.title,
        date: req.body.date,
        body: req.body.body,
       image: req.body.image
      };
    
      posts.push(data)
    
      const query = `INSERT INTO blog_posts(image, date, title, body)
         VALUES($1,$2, $3, $4)`
      const values = [data.image, data.date, data.title, data.body];
      //  FOR DEV
      console.log(query)
      //  console.log(values)
      console.log(data)
      client.query(query, values, (error, results) => {
        if (error) {
          throw error
        }
        res.send('POST request to the homepage')
      }
      );
    })
    
    
    
    // UPDATE blog posts
    let updateFields = []
    app.post('/api/update', function (req, res) {
      // console.log("keys")
      const data = {
        // image: req.body.image,
        title: req.body.title,
        body: req.body.body,
       id: req.body.id
      };

      // var criteria = ``
    
      // if (data.title) {
      //   criteria += `title = '${data.title}'`
      // }
      // if (data.body) {
      //   if (data.title) {
      //     criteria += `, body = ${data.body}'`
      //   } else {
      //     criteria += `body = '${data.body}'`
      //   }
      // }

      // const query = `UPDATE blog_posts SET ${criteria}
      const query = `UPDATE blog_posts SET title = $1, body = $2
      WHERE id = $3;`


      const values = [data.title, data.body, data.id]
    
    
      client.query(query, values, (error, results) => {
        if (error) {
          throw error
        }
        res.send('POST request to the homepage')
      }
      );
    })
    
    //    DELETE CUSTOM INVENTORY
    app.delete('/api/remove_post', function (req, response) {
      let id = req.body.id
      console.log(id);
      client.query(
        `DELETE FROM blog_posts WHERE id = '${id}' `, (error, results) => {
          console.log(error, results);
          if (error) {
            throw error
          }
    
          // var data = results.rows
          var data = results.rows
          response.send(JSON.stringify({ data }));
        }
      );
    })
    
    
    
    
    const BUCKET_NAME = process.env.NAME;
    const ACCESS = process.env.ACCESS
    const SECRET = process.env.SECRET
    
    // TODO: be able to remove pictures from S3 programmatically? 
    function uploadToS3(file) {
      let s3bucket = new AWS.S3({
        accessKeyId: ACCESS,
        secretAccessKey: SECRET,
        Bucket: BUCKET_NAME
      });
      s3bucket.createBucket(function () {
        var params = {
          Bucket: BUCKET_NAME,
          Key: file.name,
          Body: file.data
        };
        s3bucket.upload(params, function (err, data) {
          if (err) {
            console.log('error in callback');
            console.log(err);
          }
          console.log('success');
          console.log(data);
        });
      });
    }
    
    app.post('/api/upload', function (req, res, next) {
    
      console.log("body", req.body)
      // console.log("req", req)
      const element1 = req.body.element1;
      console.log(element1)
      var busboy = new Busboy({ headers: req.headers });
    
      // The file upload has completed
      busboy.on('finish', function () {
        console.log('Upload finished');
        const file = req.files.element1;
        console.log(file);
    
        uploadToS3(file);
      });
    
      req.pipe(busboy);
    });
    


    //    POST CUSTOM INVENTORY
    // let posts = []
    app.post('/api/lead-form', function (req, res) {
      console.log("keys")
      const data = {
        name: req.body.name,
        email: req.body.email,
        selection: req.body.selection,
        message: req.body.message
      };
    
      posts.push(data)
    
      const query = `INSERT INTO leads (name, email, selection, message)
         VALUES($1,$2, $3, $4)`
      const values = [data.name, data.email, data.selection, data.message];
      //  FOR DEV
      console.log(query)
      //  console.log(values)
      console.log(data)
      client.query(query, values, (error, results) => {
        if (error) {
          throw error
        }
        res.send('POST request to the homepage')
      }
      );
    })

    app.options('/api/leads', cors())
    app.get('/api/leads', cors(), function (req, response) {
    
      client.query(
        "SELECT * from leads", (error, results) => {
          if (error) {
            throw error
          }
          var data = results.rows
          response.send(JSON.stringify({ data }));
        }
      );
    })
    
    app.get('/api/leads/:id', cors(), function (req, response) {
      // var gun_id = req.params.id;
      const data = {
        id: req.params.id
      }
    
      const query = `SELECT * from leads WHERE id = $1`
      const values = [data.id]
      client.query(query, values, (error, results) => {
        if (error) {
          throw error
          // results.status(500)
        }
        var data = results.rows
        response.send(JSON.stringify({ data }));
      }
      );
    })

  //    DELETE CUSTOM INVENTORY
  app.delete('/api/remove_lead', function (req, response) {
    let id = req.body.id
    console.log(id);
    client.query(
      `DELETE FROM leads WHERE id = '${id}' `, (error, results) => {
        console.log(error, results);
        if (error) {
          throw error
        }
  
        // var data = results.rows
        var data = results.rows
        response.send(JSON.stringify({ data }));
      }
    );
  })
    
    
    // INACTIVE DB
    // const Pool = require('pg').Pool
    // const pool = new Pool({
    //   user: process.env.DB_USER,
    //   host: 'localhost',
    //   database: 'postgres',
    //   password: process.env.DB_PASS,
    //   port: 5432,
    // })
    
 
      if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, 'client/build')));
    
        // Handle React routing, return all requests to React app
        app.get('*', function (req, res) {
          res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
        });
      }
    
    
      app.listen(port, () => console.log(`Listening on port ${port}`));
    // console.log('Application running!' + cluster.worker.id);
    // }