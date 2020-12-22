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
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         <Router history = {history}>
           <Switch>
             {/* <Route path="/" component={Page}/> */}
             <Route path="/about" component={About}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
    </div>
  
  );
}

export default App;
