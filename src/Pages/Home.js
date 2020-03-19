import '../css/style.css' ;
import '../App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactUs from '../components/ContactUs';

import { Button } from 'react-bootstrap';

class App extends Component {

 
  render(){
    
  return (
           
               
   <div className="App">
   
              
  
  <section id="intro">
 
  <div className="intro-container">
  <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="carousel-background"><img src={require('../img/intro-carousel/crop.png')} alt=""/></div>
            <div className="carousel-container">
              <div className="carousel-content" style={{ float: 'left',padding:'-30px',borderRadius:'50px', width:'500px' }} >
              
              
                <h2 style={{ }} >Deal 4 Tounes </h2>
         
                <p> Une plateforme qui offre des récompenses en accomplissant 
                  des actions humanitaires, écologiques etc ...  </p>
                <Button  className="btn-get-started scrollto">Get Started</Button>
              
              </div>
            </div>
          </div>
         
        </div>

        
      </div>
      
    </div>
  </section>
<ContactUs/>

    </div>
  
      );
}
}
export default App;
