import React from "react";
import {Link, useParams,} from "react-router-dom";

const VInfo = () => {

    let params = useParams();

    const event = JSON.parse(atob(params.id));

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='mt-5'>
                    <p>Event: {event.title}</p>
                    <p>Description: {event.description}</p>
                    <p>Price: {event.price} TON</p>
                    <Link className='btn btn-primary' to={'/ton/visitor/translation/' + params.id}>Start event</Link>
                </div>
            </div>
        </div>
    )
}

export default VInfo