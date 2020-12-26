import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
// import Page from "./pages/Homepage/index"
import About from "./pages/About"
import Homepage from "./pages/Homepage/index"
import Blog from "./pages/Blog/index"
import BlogPost from "./pages/BlogPost/index"
import Nav from "./components/Nav/index"
import createHistory from 'history/createBrowserHistory';
import {Helmet} from "react-helmet";

// const MyContext = React.createContext();


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
          
         <Router history = {history}>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Unbreakable</title>
                <content>Unbreakable by Carolyn Skowron</content>
                {/* <link rel="canonical" href="http://www.colemandefense.com/" /> */}
            </Helmet>
           <Nav></Nav>
           <Switch>
             {/* <Route path="/" component={Page}/> */}
             <Route path="/blog/:post" component={BlogPost}/>
             <Route path="/blog" component={Blog}/>
             <Route path="/about" component={About}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
    </div>
  
  );
}

export default App;
