import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ContactUs' ;
import Home from './Pages/Home' ;  
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ThePageOfArticles from './Pages/ThePageOfArticles';
class App extends Component {


  render(){
    
  return (
           
   
<Router>
                
   <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
       
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={ThePageOfArticles} />

    </div>
  </Router>
);   
              
  
   
  
}
}
export default App;
