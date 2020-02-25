import React,{ Component } from 'react';

import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class AddModel extends Component{
  constructor(props){
      super(props);  
    }

    render(){
      return(
        <div className="container" >
          
          
          <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{padding:'40px'}}>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row >
              <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="Name">
              <Form.Label> Your username</Form.Label>
              <Form.Control
                type="text"
                name="Name"
                required
                placeholder="Name"
               />
               <Form.Label> Your email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                placeholder="email"
               />
               <Form.Label> Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="password"
               />
               <Form.Label> Repeat password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                required
                placeholder="password"
               />
              </Form.Group>

              <Form.Group>
                  <Button variant="primary" type="submit"  style={{backgroundColor:"#18d26e",}}>
                  Sign up
                  </Button>
              </Form.Group>
              </Form>
              </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

          </div>
          
          
          );
      
        }


  }
  export default AddModel ;