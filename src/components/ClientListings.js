import React from 'react';
import {Button, Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function genListingList(listings,reservationRoute){
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
                            <p>Amenities: {elem["amenities"].join(", ")}</p>
                            <p>Bedrooms and Quantity: {elem["bedrooms"].map((bedroom)=>{
                                return bedroom["type"] + " "+ bedroom["quantity"].toString();
                            }).join(", ")}</p>
                        </Card.Text>
                        </Col>
                        <Col>
                            <Row>
                                <Button type={"submit"} className={"mb-3"} variant={"primary"} onClick={reservationRoute}>Book Listing</Button>
                            </Row>
                        </Col>

                    </Row>
                </Card.Body>

            </Card>
        </ListGroupItem>)
    });
    return out;
}

function ClientListing() {
    let sampleListings= [{"listingName":"Boston Bed and Breakfast", "listingPrice": 200, "listingLocation": {"address1": "Huntington Ave", "address2": "Apartment 1", "city": "Boston", "state": "MA","zipcode": "02120"}, "amenities": ["washing machine", "hot tub"], "bedrooms": [{"quantity":2,"type":"queen"}, {"quantity": 1, "type": "king"}]}, {"listingName":"Dreams Delight", "listingPrice": 300, "listingLocation": {"address1": "Cedar Ave", "address2": "Apartment 104", "city": "Billerica", "state": "MA","zipcode": "02119"}, "amenities": ["washing machine", "wifi"], "bedrooms": [{"quantity":2,"type":"single"}, {"quantity": 3, "type": "bunk"}]}]
    let navigate = useNavigate();
    const newReservationRoute= () =>{
        let path = `/new_reservation`;
        navigate(path);
    }
    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Client!</Card.Header>
                <Card.Body>
                <Card.Title>Below are the available listings.</Card.Title>
                    <ListGroup>
                        {genListingList(sampleListings,newReservationRoute)}
                    </ListGroup>
                </Card.Body>

            </Card>
        </div>
    );
}

export default ClientListing;