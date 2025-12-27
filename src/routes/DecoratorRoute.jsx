import React from 'react';
import useRole from '../hooks/useRole';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router';

const DecoratorRoute = ({children}) => {
    const [role,roleLoading] = useRole()
    if(roleLoading)
    {
        return <Loading></Loading>
    }
    if(role === 'decorator')
    {
        return children
    }
    return (
        <div>
            <Navigate to="/" replace="true"></Navigate>
        </div>
    );
};

export default DecoratorRoute;