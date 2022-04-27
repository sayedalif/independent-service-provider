import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    return (
        <div>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;