import React from 'react';
import {Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";

function genListingList(listings){
    let out = [];
    listings.forEach((elem)=>{
        out.push(<ListGroupItem>
            <Card className={"text-start"}>
                <Card.Header> {elem["listingName"]}
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col lg={"10"}>
                        <Card.Text>
                            <p>Listing price: {elem["listingPrice"]}</p>
                            <p>Address 1: {elem["listingLocation"]["address1"]}, Address 2: {elem["listingLocation"]["address2"]}, City: {elem["listingLocation"]["city"]}, State: {elem["listingLocation"]["state"]}, Zipcode: {elem["listingLocation"]["zipcode"]}</p>
                        </Card.Text>
                        </Col>
                        <Col>
                            <Row>
                                <Button type={"submit"} className={"mb-3"}>Edit Listing</Button>
                            </Row>
                            <Row>
                                <Button type={"submit"} className={"mb-3"} variant={"danger"}>Delete Listing</Button>
                            </Row>
                        </Col>

                    </Row>
                </Card.Body>

            </Card>
        </ListGroupItem>)
    });
    return out;
}

function Listing() {
    let sampleListings = [{"listingID":1, "listingName": "Boston Bed and Breakfast", "listingPrice": 200, "listingLocation":{"address1": "Huntington Ave", "address2": "Apartment 1", "city": "Boston", "state": "MA","zipcode": "02120"}}, {"listingID":2, "listingName": "Dreams Delight", "listingPrice": 500, "listingLocation":{"address1": "Washington Ave", "address2": "Apartment 2", "city": "Billerica", "state": "MA","zipcode": "0200"}}]

    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Host!</Card.Header>
                <Card.Body>
                <Card.Title>Below are your posted listings.</Card.Title>
                    <ListGroup>
                        {genListingList(sampleListings)}
                    </ListGroup>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Listing;