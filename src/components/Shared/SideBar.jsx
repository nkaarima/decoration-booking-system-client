import React from 'react';
import { Link } from 'react-router';
import { AiOutlineMenu } from 'react-icons/ai'; 

const SideBar = () => {
    return (
         <div className="bg-[#cbbeb5] space-y-2">

                   <div className="flex items-center">                     
                       <h1 className="hidden md:block"><Link to="/" className="btn btn-ghost text-3xl font-bold">Smart Decor</Link></h1>
                         <AiOutlineMenu size={24} />
                                   
                    </div>              
 
                     <ul className="space-y-7 text-small p-4">
                        <li>My Bookings</li>
                        <li>Payment History</li>
                        <li>My Profile</li>
                        <li>Manage Decorators</li>
                        <li>Manage Services & Packages</li>
                     </ul>                 
                
             </div>
    );
};

export default SideBar;