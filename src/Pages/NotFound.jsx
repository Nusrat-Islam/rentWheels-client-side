import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <div>
                <img src="/404Page.png" alt="" />

                <div className='flex flex-col justify-center items-center mt-10'>
                    <div>
                        <p className='primary-font font-semibold text-3xl text-gray-700'>Opps!404 Page Not Found</p>
                    </div>
                    <Link to='/' className='thm-btn btn text-xl mt-5'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;