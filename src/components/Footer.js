import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export class Footer extends Component {
    render() {
        return (
            <Container>
                <Form>
                    <Row className='formcolor'>
                        <Col className="col-md-4  mt-3">
                            <h2>Contact Us</h2>
                            <br />
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control placeholder="Enter subject" />
                            </Form.Group>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control placeholder="Enter description" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                        <Col className="col-md-3 ml-5 mt-3">
                            <h2>Topics</h2>
                            <br />
                            <ul>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                                <li>Five</li>
                                <li>Six</li>
                                <li>Seven</li>
                            </ul>
                        </Col>
                        <Col className="col-md-4  mt-5">
                            <img src={require('../images/form2.jpg').default} />
                        </Col>
                    </Row>
                </Form>

            </Container>
        )
    }
}

export default Footer

