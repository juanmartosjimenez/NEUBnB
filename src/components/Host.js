import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function Host() {
    let navigate = useNavigate();
    const viewListRoute = () =>{
        let path = `/listings`;
        navigate(path);
    }
    const newListRoute = () =>{
        let path = `/new_listings`;
        navigate(path);
    }
    return (
        <div>
            <Card className="text-center m-2">
                <Card.Header>Welcome Host!</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Do you want to view your current listings or add a new listing?
                    </Card.Text>
                    <div className={"container-fluid"}>
                        <div className="row">
                            <div className="col-sm text-center">
                                <p className={"h6"}>View Listings</p>
                                <Button type="submit" className="btn btn-primary" onClick={viewListRoute}>Click to view listings</Button>
                            </div>
                            <div className="col-sm text-center">
                                <div className="col-sm text-center">
                                    <p className={"h6"}>Add Listing</p>
                                    <Button type="submit" className="btn btn-primary" onClick={newListRoute}>Click to add a new listing</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Host;