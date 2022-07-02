import React from "react";
import {useNavigate, useParams,} from "react-router-dom";

const VTranslation = () => {

    let params = useParams();
    let navigate = useNavigate();

    const stop = () => {
        navigate('/ton/visitor/result/' + params.id);
    }

    return (
        <div className='row'>
            <div className='col-xs-12 col-md-6'>
                Event id {params.id}
            </div>
            <div className='col-xs-12 col-md-6 text-end'>
                Balance, time,
                <button className='btn btn-stop' onClick={stop}></button>
            </div>
            <div className='col-12'>
                <div className='video mt-5'>
                    <p>Пока Илья снимает видео с танцующей хрюшкой, тут будет эта надпись</p>
                </div>
            </div>
        </div>
    )
}

export default VTranslation