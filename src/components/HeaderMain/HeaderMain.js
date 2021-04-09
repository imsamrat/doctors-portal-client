import React from 'react';
import Banner from '../../images/ap-banner-bg.png'

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> starts Here</h1>
                <p ClassName="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={Banner} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;