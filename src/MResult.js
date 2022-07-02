import React from "react";
import {useParams,} from "react-router-dom";

const MResult = () => {

    let params = useParams();

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='mt-5'>
                    <p>Event: {params.id}</p>
                    <p>Time: 123</p>
                    <p>Price: 100500 TON</p>
                </div>
            </div>
        </div>
    )
}

export default MResult