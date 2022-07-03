import React from "react";
import {useParams,} from "react-router-dom";

const VResult = () => {

    let params = useParams();
    const event = JSON.parse(atob(params.id));

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='mt-5'>
                    <p>Event: {params.title}</p>
                    <p>Time: {event.time}</p>
                    <p>Price: {event.amount} TON</p>
                </div>
            </div>
        </div>
    )
}

export default VResult