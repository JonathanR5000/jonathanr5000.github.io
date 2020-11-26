import React from 'react';
import '../../App.css';
import Axios from 'axios';
import { Form } from 'react-bootstrap';

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

    render() {
        return(
        <div class="contact-container">
            <h1 class="contact-text">
                Let's Chat
            </h1>
            <div class="contact-content">
                <Form>
                    <Form.Group>
                        <Form.Label>Full Name</Form.Label>
                    </Form.Group>
                </Form>
            </div>
        </div>
        );
    }
}

export default Contact;