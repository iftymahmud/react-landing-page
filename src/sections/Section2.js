import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Section2() {
    return (
        <div>
            <Container>
                <Row className="text-center section2Contents">
                    <Col sm={12}>
                        <h3> We have all the latest collections from our affiliated brands</h3>
                        <Image src="/images/logos.jpg" fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section2