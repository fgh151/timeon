import React from "react";
import {Link, useParams,} from "react-router-dom";

const MWait = () => {

    let params = useParams();

    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                Event id {params.id.substring(0, 30)}
            </div>
            <div className='col-xs-12 col-md-6 text-end'>
                Link: <Link to={'/visitor/info/' + params.id} target='_blank'>open</Link>
            </div>

            <div className='col-12'>
                <div className='wait mt-5'>
                    <Link to={'/mentor/translation/' + params.id}> Waiting for user</Link>
                </div>
            </div>
        </div>
    )
}

export default MWait