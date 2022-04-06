import {Button, Card, FloatingLabel, Form, ListGroup, Row} from "react-bootstrap";
import React from "react";

function createAmenitiesDropdowns(list){
    let out = []
    list.forEach((elem)=>{
        out.push(<Form.Check className={"text-lg-start"} type="checkbox" id={"default-"+elem} label={elem} >
        </Form.Check>)
    })
    console.log(out)
    return out;
}

function createBedsDropdowns(list){
    let out = []
    list.forEach((elem)=>{
        out.push(<FloatingLabel
            controlId="floatingInput"
            label={elem}
            className="mb-3"><Form.Control type="number" placeholder="0" value="0" /></FloatingLabel>)});
    console.log(out)
    return out;
}

function NewListing() {
    let sampleAmenities = ["Hot Tub" ,"Washing Machine", "WiFi"];
    let sampleBedrooms = ["Bunk Bed" ,"Queen Bed", "Single Bed", "Full Bed"];

    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Host!</Card.Header>
                <Card.Body>
                    <Card.Title>Fill out the information below to add a new listing.</Card.Title>
                    <Form>
                    <ListGroup>
                    <ListGroup.Item>
                        <Row className="m-3">
                            <Form.Group className="col-md-6">
                                <Form.Label>Listing Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Listing Name" />
                            </Form.Group>
                            <Form.Group className="col-md-6">
                                <Form.Label>Daily Listing Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter Daily Listing Price" />
                            </Form.Group>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className="m-3">
                                <Form.Group className="col">
                                    <Form.Label>Address 1</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Address 1" />
                                </Form.Group>
                                <Form.Group className="col">
                                    <Form.Label>Address 2</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Address 2" />
                                </Form.Group>
                                <Form.Group className="col-md-2">
                                    <Form.Label>Zipcode</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Zipcode" />
                                </Form.Group>
                            </Row>
                            <Row className="m-3">
                                <Form.Group className="col">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter City" />
                                </Form.Group>
                                <Form.Group className="col">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="Enter State" />
                                </Form.Group>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className="m-3">
                                <Form.Group className="col">
                                    <Form.Label>Select all amenities that apply:
                                    </Form.Label>
                                    {createAmenitiesDropdowns(sampleAmenities)}
                                </Form.Group>
                                <Form.Group className="col">
                                    <Form.Label>Select how many of each bed type in listing:</Form.Label>
                                    {createBedsDropdowns(sampleBedrooms)}
                                </Form.Group>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                            <Button type="submit" className="m-3 btn btn-primary">Submit</Button>
                        </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default NewListing;