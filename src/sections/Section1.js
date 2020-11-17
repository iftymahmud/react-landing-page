import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Section1() {
    return (
        <div>
            <Container>
                <Row className="my-3">
                    <Col lg={6} className="text-center my-auto py-5">
                        <h1 className="section1Heading">Rasp Shoe Store</h1>
                        <h5>Buy shoes from world class<br />brands in one place</h5>
                    </Col>
                    <Col lg={6} className="my-2">
                        <Image src="/images/landing.png" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section1