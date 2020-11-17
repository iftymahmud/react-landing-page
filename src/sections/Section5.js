import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

function Section5() {
    return (
        <div className="section5Full">
            <Card className="section5Card">
                <Container>
                    <Card.Body className="text-center mt-5 py-5">
                        <Card.Title><h3>Our Story</h3></Card.Title>
                        <Card.Text className="text-justify">
                            Vivamus egestas pretium enim, ac semper dolor elementum et. Nulla sollicitudin libero et nisl euismod mattis. Fusce gravida nulla a ligula tincidunt, sed sagittis lacus egestas. Nam non diam vel dui vulputate viverra quis nec magna. Vivamus eros nisi, semper id auctor eu, blandit et nisl. Duis aliquam nisl in condimentum commodo. Nullam justo eros, suscipit vel egestas in, efficitur ut dui. Suspendisse potenti. Ut aliquet mauris at posuere varius. Suspendisse ipsum nisi, commodo vitae ultricies vel, auctor ut diam. Pellentesque nunc dolor, facilisis at leo sed, efficitur varius augue. Pellentesque interdum, mi vel maximus dictum, lorem lorem finibus arcu, id viverra libero justo sagittis quam. Aliquam placerat odio et ipsum iaculis, quis accumsan magna aliquet. Ut vel dui vitae mi viverra elementum.
                        </Card.Text>
                    </Card.Body>
                </Container>
            </Card>

            <section class="home-newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="single">
                                <h2>Subscribe to our Newsletter</h2>
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-theme" type="submit">Subscribe</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Section5