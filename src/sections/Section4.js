import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Section4() {
    return (
        <div className="section4Content">
            <Container className="my-5 text-center">
                <h2 className="my-5"><i class="fas fa-meteor"></i> Latest Arrivals</h2>
                <Row>
                    <Col lg={4} sm={12} className="my-2">
                        <Image src="/images/1.jpg" fluid rounded />
                    </Col>
                    <Col lg={4} sm={12} className="my-2">
                        <Image src="/images/2.jpg" fluid rounded />
                    </Col>
                    <Col lg={4} sm={12} className="my-2">
                        <Image src="/images/3.jpg" fluid rounded />
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Section4