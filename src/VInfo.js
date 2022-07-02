import React from "react";
import {Link, useParams,} from "react-router-dom";

const VInfo = () => {

    let params = useParams();

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='mt-5'>
                    <p>Event: {params.id}</p>
                    <p>Description: 123</p>
                    <p>Price: 100500 TON</p>
                    <Link className='btn btn-primary' to={'/ton/visitor/translation/' + params.id}>Start event</Link>
                </div>
            </div>
        </div>
    )
}

export default VInfo