import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

function Modal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
       
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <h2>Order Acceptance</h2>
          <Row>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 1</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 2</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Ultimate Goal Phase</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
          </Row>

          <h2>Reaching Vendor</h2>
          <Row>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 1</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 2</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Ultimate Goal Phase</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
          </Row>

          <h2>Delivering Time</h2>
          <Row>
            <Col xs={6} md={4}>
            <label for="inputState">Primary Time Zone</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Secondary Time Zone</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Other minute Zone</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
          </Row>
          
          <h2>Clear Payment</h2>
          <Row>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 1</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Goal Phase 2</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
            <Col xs={6} md={4}>
            <label for="inputState">Ultimate Goal Phase</label>
            <select id="inputState" class="form-control">
            <option selected>Select</option>            
            </select>
            </Col>
          </Row>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}