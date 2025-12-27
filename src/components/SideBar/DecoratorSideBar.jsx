import React from 'react';
import { Link } from 'react-router';

const DecoratorSideBar = () => {
    return (
        <div>
            <ul className="space-y-7 text-small p-4">
                <li><Link to="assigned-project">My Assigned Projects</Link></li>
                <li><Link>Today's Schedule</Link></li>
                <li><Link>Update Project Status</Link></li>
                <li><Link>Earnings Summary</Link></li>
            </ul>
        </div>
    );
};

export default DecoratorSideBar;