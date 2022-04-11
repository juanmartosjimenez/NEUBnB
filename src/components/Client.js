import React from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Client() {
    let navigate = useNavigate();
    const listingsRoute = () =>{
        let path = `/client_listings`;
        navigate(path);
    }

    const newReservationRoute= () =>{
        let path = `/new_reservation`;
        navigate(path);
    }
    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Client!</Card.Header>
                <Card.Body>
                    <Card.Title>Do you want to find a listing or edit a reservation?</Card.Title>
                    <div className={"container-fluid"}>
                        <div className="row">
                            <div className="col-sm text-center">
                                <p className={"h6"}>Find a listing</p>
                                <Button type="submit" className="btn btn-primary" onClick={listingsRoute}>Click to view available listings</Button>
                            </div>
                            <div className="col-sm text-center">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Edit Reservation</Form.Label>
                                        <Form.Control placeholder="Enter reservationID to edit current reservation" />
                                    </Form.Group>
                                    <button  className="btn btn-primary" onClick={newReservationRoute}>Submit</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Client;