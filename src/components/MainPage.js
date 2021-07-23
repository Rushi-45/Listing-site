import React, { Component } from 'react';
import PhotoGallery from './PhotoGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import '../styles1.css';
import one from '../images/house1.jpg';
import two from '../images/house2.jpg';
import SearchBar from './SearchBar.js';
import three from '../images/house3.jpg';
import SearchBar1 from './SearchBar1';

class MainPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const containerWidth = {
            width: '1000px'
        }

        return (
            <div>
                <SearchBar />
                <Container style={containerWidth}>
                    <Row className='carousel'>
                        <Col className='col-md-12'>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../images/plan1.jpg').default}
                                        alt="First slide"
                                        height="650" width="650"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Random Description Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../images/plan2.jpg').default}
                                        alt="Second slide"
                                        height="650" width="650"
                                    />

                                    <Carousel.Caption className='carouseleffect'>
                                        <h3>Second slide label</h3>
                                        <p>Description Random Typed</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={require('../images/plan3.jpg').default}
                                        alt="Third slide"
                                        height="650" width="650"
                                    />

                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Typed Random Description</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <br />
                    </Row>

                    <br />
                    <br />
                    <br />
                    <Row className="col-md-12 offset-md-4">
                        <h2> Starter Courses</h2>
                    </Row>
                    <Row>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                            <Card style={{ width: '22rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={one}
                                    alt='Image'
                                    height="250 " width="250"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            {/* </div> */}
                        </Col>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                            <Card style={{ width: '22rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={two}
                                    alt='Image'
                                    height="250 " width="250"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the car d title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            {/* </div> */}
                        </Col>
                        <Col className='col-md-4'>
                            {/* <div className="col-3"> */}
                            <Card style={{ width: '22rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={three}
                                    alt='Image'
                                    height="250 " width="250"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the car d title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                            {/* </div> */}
                        </Col>
                    </Row>
                    <br />
                    <PhotoGallery />
                    <br />
                </Container>
            </div>
        )
    }
}

export default MainPage
