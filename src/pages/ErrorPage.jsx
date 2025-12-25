import React from 'react';
import errorImg from '../assets/error-page.jpg'

const ErrorPage = () => {
    return (
        <div className="w-11/12 mx-auto">
             <img src={errorImg} className="w-full h-full object-cover" alt="" />
        </div>
    );
};

export default ErrorPage;