import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const BuyerWelcome = () => {
    const {user}= useAuth()
    return (
        <div className='dashboard-welcome'>
        <Row>
            <Col md={6}>
                <h2 style={{color:""}}>Hello, <span style={{color:"#46AADC"}} className='fs-1'>{user.displayName}</span></h2>
                <p style={{color:"",fontWeight:"700"}} className='fs-4'>Welcome to <span style={{color:"#46AADC",fontWeight:"700"}}>E-Commerce</span> SARONG</p>
            </Col>
            <Col md={6}>
                <div className="dashboard-image">
                    <img src={user.displayName ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" />
                </div>
            </Col>
        </Row>
    </div>
    );
};

export default BuyerWelcome;