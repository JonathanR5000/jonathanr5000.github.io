import React from 'react';
import '../../App.css';
import Axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
            emailSent: true 
        })
    }

    render() {
        return(
        <div class="contact-container">
            <h1 class="contact-text">
                Let's Chat
            </h1>
            <div class="contact-content">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-Name">Full Name</Form.Label>
                        <Form.Control id="full-Name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="4" value={this.state.message} onChange={this.handleChange}></Form.Control>
                    </Form.Group>

                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                        Send
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline successs-msg">Email Sent!</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent!</p>}
                </Form>
            </div>
        </div>
        );
    }
}

export default Contact;