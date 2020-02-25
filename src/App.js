
import './css/style.css' ;
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons' ;
import {Button, ButtonToolbar} from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import AddModel from './components/AddModel';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={deps:[], addModalShow : false, editModalShow : false}
}

  render(){
    let addModalClose =() => this.setState({addModalShow:false});
  return (
    <div className="App">
     <header id="header">
    <div className="container-fluid">

      <div id="logo" className="pull-left">
      <h1><a href="#intro" className="scrollto">Deal4Tounes</a></h1>
      </div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">
       
          <li className="menu-active"><a href="#intro">Home</a></li>
          <li><a href="#contact">Contact</a></li>
           <li className="menu-has-children"><a href="">Login</a>
            <ul>
            
              <div id="popover-content" class="hide" style={{width :'200px'}}>
           <form style={{flexDirection: "column"}}>
           <div class="form-group">
           <label for="exampleInputEmail1">Email address</label>
           <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
           </div>
           <div class="form-group">
           <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
          
            <button type="submit" class="btn btn-primary" style={{backgroundColor:"#18d26e"}}>  Submit</button>
               </form>
               </div>
               </ul>
              </li>
          <li><a href="#about"  variant='primary'
    onClick={()=> this.setState({addModalShow: true})} >register</a></li>
          <AddModel
    show={this.state.addModalShow}
    onHide={addModalClose}
    />
       
        </ul>
      
      </nav>
    </div>
  </header>
  
  <section id="intro">
  <div className="intro-container">
  <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
  <ol className="carousel-indicators"></ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="carousel-background"><img src={require('./img/intro-carousel/crop.png')} alt=""/></div>
            <div className="carousel-container">
              <div className="carousel-content" style={{border: '2px solid',background:'#212223',opacity: '0.45',padding:'-30px',borderRadius:'50px', width:'500px' }} >
              
              
                <h2 style={{ color:'#d1c027'}} >Deal 4 Tounes </h2>
         
                <p> Une plateforme qui offre des récompenses en accomplissant 
                  des actions humanitaires, écologiques etc ...  </p>
                <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
              
              </div>
            </div>
          </div>
         
          <div className="carousel-item">
            <div className="carousel-background"><img src={require('./img/intro-carousel/butterfly.png')} alt=""></img></div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Make an impact</h2>
                
                <a href="#featured-services" className="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
          </div>

        </div>

        <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
      
    </div>
  </section>
 
  <section id="contact" class="section-bg wow fadeInUp">
      <div class="container">

        <div class="section-header">
          <h3>Contact Us</h3>
          <form action="" method="post" role="form" class="contactForm">
            <div class="form-row">
              <div class="form-group col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validation"></div>
              </div>
              <div class="form-group col-md-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validation"></div>
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
              <div class="validation"></div>
            </div>
            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
              <div class="validation"></div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>

        </div>
</div>
</section>


    </div>
  );
}
}
export default App;
