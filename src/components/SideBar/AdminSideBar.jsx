import React from 'react';
import { Link } from 'react-router';

const AdminSideBar = () => {
    return (
        <div>
            <ul className="space-y-7 text-small p-4">
                <li><Link to="manage-decorator">Manage Decorators</Link></li>
                <li><Link to="manage-service">Manage Services and Packages</Link></li>
                <li><Link to="review-booking">Manage Bookings</Link></li>
                <li><Link to="assign-decorator">Assign Decorator</Link></li>
                <li><Link to="approve-decorators">Approve or Disable Decorator accounts</Link></li>
                <li><Link>Revenue Monitoring</Link></li>
                <li><Link>Analytics Chart</Link></li>
                
            </ul>
        </div>
    );
};

export default AdminSideBar;