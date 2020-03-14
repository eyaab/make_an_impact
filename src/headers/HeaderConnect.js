import React,{ Component } from 'react';
import AddModel from '../components/AddModel';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../App';

class HeaderConnect extends Component{

  constructor(props){
    super(props);
    this.state ={deps:[], addModalShow : false, editModalShow : false}
}
    render(){
        let addModalClose =() => this.setState({addModalShow:false});
        return(    
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




        ) 
    } 
    
}
export default HeaderConnect ;