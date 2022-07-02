import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='video'>
                        <Link to='/mentor'> Mentor</Link>
                    </div>
                </div>
                <div className='col'>
                    <div className='video'>
                        <Link to='/visitor/123'> Visitor</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;