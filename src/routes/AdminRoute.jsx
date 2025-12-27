import React from 'react';
import useRole from '../hooks/useRole';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router';

const AdminRoute = ({children}) => {
    const [role,roleLoading] = useRole();
    if(roleLoading)
    {
        return <Loading></Loading>
    }

    if(role === 'admin')
    {
        return children
    }
    return <Navigate to="/" replace="true"></Navigate>
};

export default AdminRoute;