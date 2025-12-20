import React from 'react';
import { Link } from 'react-router';

const UserSideBar = () => {
    return (
        <div>
            <ul className="space-y-7 text-small p-4">
                <li><Link>My Bookings</Link></li>
                <li><Link>Payment History</Link></li>
            </ul>
        </div>
    );
};

export default UserSideBar;