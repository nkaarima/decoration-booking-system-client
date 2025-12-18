import React from 'react';
import { Link } from 'react-router';
import { AiOutlineMenu } from 'react-icons/ai'; 

const SideBar = () => {
    return (
         <div className="bg-[#cbbeb5] space-y-2">

                   <div className="flex items-center gap-1.5">                     
                       <h1 className="hidden md:block"><Link to="/" className="btn btn-ghost text-large font-bold">Smart Decor</Link></h1>
                         <AiOutlineMenu size={20} />
                                   
                    </div>              
 
                     <ul className="space-y-7 text-small p-4">
                        <li><Link>My Bookings</Link></li>
                        <li><Link>Payment History</Link></li>
                        <li><Link>My Profile</Link></li>
                        <li><Link>Manage Decorators</Link></li>
                        <li><Link to="manage-service">Manage Services & Packages</Link></li>
                     </ul>                 
                
             </div>
    );
};

export default SideBar;