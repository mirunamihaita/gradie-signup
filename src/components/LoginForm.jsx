import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Confirmation from "./Confirmation";
import * as PropTypes from "prop-types";


function LoginForm(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
        return {handleChange, values}
    }
    // console.log(values)
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        event.preventDefault();

    }

    return(
        <div className="col-12 col-lg-6 bg-white border p-5 ">
        {validated ?
            <Confirmation />
        :  <div>
                <h2 className="mb-3">Login</h2>
                <Form className="d-flex flex-column" noValidate validated={validated} onSubmit={handleSubmit} action="./Confirmation">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="john@example.com" value={values.email} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter your email address.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="At least 8 characters"  value={values.password} onChange={handleChange} required />
                        <Form.Control.Feedback type="invalid">
                            Please enter your password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={<span>By creating an account you agree to the <a href="/terms">Terms & Conditions</a></span> } required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="p-3">
                        Create an Account
                    </Button>
                </Form>
            </div>}
        </div>
    )
}

export default LoginForm