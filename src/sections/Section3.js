import React from 'react'
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap'

function Section3() {
    return (
        <div className="section3Background">
            <Container>
                <Row className="text-center">
                    <Col lg={6} sm={12}>
                        <Image src="/images/inspiration.jpg" fluid rounded />
                    </Col>

                    <Col lg={6} sm={12} className="my-3">
                        <h2 className="section3Title">A store you can trust</h2>
                        <p className="text-justify">Nunc porttitor diam nisl, in laoreet purus fermentum id. Donec dapibus fringilla sagittis. Curabitur in vulputate purus. Donec purus velit, vulputate non est feugiat, dapibus sollicitudin lectus. Maecenas in mauris id ligula condimentum hendrerit. Quisque a leo vitae purus elementum gravida. Nunc id odio consequat, pellentesque ante non, rutrum enim. Donec ac lorem mauris. Sed eu nunc turpis. Integer luctus orci at nisl vehicula, id ultricies elit luctus. Curabitur pharetra, justo a auctor ultricies, magna eros auctor felis, feugiat consectetur felis urna at lorem. Cras cursus sapien et aliquam viverra. Suspendisse ante neque, molestie non ex et, dictum lobortis orci. Praesent consectetur, nunc nec bibendum faucibus, ligula quam venenatis nibh, vel vulputate ex massa a lectus. Duis id lacinia ex, ac vestibulum mi. Curabitur diam lorem, dapibus eget ligula et, euismod accumsan est. Quisque sed diam massa. Donec lacinia, justo at eleifend tincidunt, diam nulla maximus turpis, sed euismod est ligula eu metus.</p>

                        <ListGroup variant="flush" className="mt-5 text-left">
                            <ListGroup.Item variant="secondary" className="pl-5"><i class="far fa-check-circle"></i>  Authentic Products</ListGroup.Item>
                            <ListGroup.Item variant="secondary" className="pl-5"><i class="far fa-check-circle"></i>  Home Delivery</ListGroup.Item>
                            <ListGroup.Item variant="secondary" className="pl-5"><i class="far fa-check-circle"></i>  After Sales service</ListGroup.Item>
                            <ListGroup.Item variant="secondary" className="pl-5"><i class="far fa-check-circle"></i>  EMI</ListGroup.Item>

                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Section3