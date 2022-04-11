import React from 'react';
import { useNavigate } from "react-router-dom";
import {Button, Card, Form} from "react-bootstrap";

function Home() {

    let navigate = useNavigate();
    const clientRoute = () =>{
        let path = `/client`;
        navigate(path);
    }
    const hostRoute = () =>{
        let path = `/host`;
        navigate(path);
    }

    return (

        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome!</Card.Header>
                <Card.Body>
                    <Card.Title>Are you a host or a client?</Card.Title>
                    <Card.Text>
                        Enter your clientID or your hostID to view your information.
                    </Card.Text>
                    <div className={"container-fluid"}>
                        <div className="row">
                            <div className="col-sm text-center">
                                <p className={"h5"}>For clients:</p>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>ClientID</Form.Label>
                                        <Form.Control placeholder="Enter clientID" />
                                    </Form.Group>
                                    <Button type="submit" className="btn btn-primary" onClick={clientRoute}>Submit</Button>
                                </Form>
                            </div>
                            <div className="col-sm text-center">
                                <p className={"h5"}>For Hosts:</p>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>HostID</Form.Label>
                                        <Form.Control placeholder="Enter HostID" />
                                    </Form.Group>
                                    <button  className="btn btn-primary" onClick={hostRoute}>Submit</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </Card.Body>

            </Card>
</div>
    );
}

export default Home;