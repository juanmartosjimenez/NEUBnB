import {Button, Card, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import React from "react";

function NewReservation() {
    let listingName = "Boston bed and breakfast";

    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Host!</Card.Header>
                <Card.Body>
                    <Card.Title>Reservation at {listingName}</Card.Title>
                    <Form>
                    <ListGroup>
                        <ListGroupItem>
                            <Row className="m-3">
                                <Form.Group className="col-md-6">
                                    <Form.Label>Start Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter booking end date" />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Label>End Date</Form.Label>
                                    <Form.Control type="date" placeholder="Enter booking end date" />
                                </Form.Group>
                            </Row>
                            <Row className="m-3">
                                <Form.Group >
                                    <Form.Label>Number of People</Form.Label>
                                    <Form.Control type="number" placeholder="Enter number of people" />
                                </Form.Group>
                            </Row>
                        </ListGroupItem>
                            <Button type="submit" className="m-3 btn btn-primary">Submit</Button>
                        </ListGroup>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewReservation;