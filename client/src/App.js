import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
import Homepage from "./pages/Homepage/index"
import Contact from "./pages/Contact/index"
import Admin from "./pages/Admin/index.js"
import Blog from "./pages/Blog/index.js"
import Connect from "./pages/Connect/index.js"
import Offerings from "./pages/Offerings/index"
import BlogPost from "./pages/BlogPost/index.js"
import Footer from "./components/Footer/index.js"
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         {/* <Navigation/> */}
         <Router history = {history}>
           <Switch>
             {/* <Route path = "/" component={App}/> */}
             {/* <Route path="/pricing" component={Pricing}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/> */}
             {/* <Route path="/blog/:post" component={BlogPost}/>
             <Route path="/blog" component={Blog}/>
             <Route path="/connect" component={Connect}/>
             <Route path="/offerings" component={Offerings}/>
             <Route path="/admin" component={Admin}/> */}
             <Route path="/contact" component={Contact}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
       {/* <Footer></Footer> */}
         
    </div>
  
  );
}

export default App;
