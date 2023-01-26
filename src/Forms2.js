import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Forms2() {

    const [activate,setActivate]=useState({
        email:"",
        password:"",
        code:""
    });
    const handle = (event)=> {
        setActivate({
            ...activate,
            [event.target.name]: event.target.value
        })
        console.log(event.target.name);
        // let obj={...activate};
        // console.log(obj.email);
        // console.log(event.target.type);
        // setActivate(...activate,[e.target.name] : e.target.value);
    }

  return (
    <Form>
      <Form.Group className="mb-5" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handle} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={handle} />
      </Form.Group>

      <Form.Group className="mb-5" controlId="formBasicPassword">
        <Form.Label>Code</Form.Label>
        <Form.Control type="text" placeholder="Enter the code" name="code" onChange={handle}  />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <div>{activate.email}</div>
      <div>{activate.password}</div>
      <div>{activate.code}</div>
    </Form>
    
  )
}

export default Forms2