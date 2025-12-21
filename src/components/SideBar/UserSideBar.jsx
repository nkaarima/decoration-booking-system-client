import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const UserSideBar = () => {
  
     const {user} = useAuth();

    return (
        <div>
            <ul className="space-y-7 text-small p-4">
                <li><Link to="my-booking">My Bookings</Link></li>
                <li><Link to={`payment-history/${user?.email}`}>Payment History</Link></li>
            </ul>
        </div>
    );
};

export default UserSideBar;