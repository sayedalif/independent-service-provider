import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const purchase = () => {
    toast('purchase done!');
  };

  return (
    <div>
      <Form onClick={(e) => e.preventDefault()} className="w-50 mx-auto mt-2">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" placeholder="Enter you country" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTown">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="enter your city" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicTown">
          <Form.Label>ZIP or Postal code</Form.Label>
          <Form.Control type="number" placeholder="enter your code" />
        </Form.Group>
        <Button onClick={purchase} variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
