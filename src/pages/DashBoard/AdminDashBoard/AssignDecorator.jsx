import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignDecorator = () => {
    const axiosSecure= useAxiosSecure();

   
    return (
        <div>
            decorators
        </div>
    );
};

export default AssignDecorator;