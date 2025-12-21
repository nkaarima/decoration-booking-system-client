import React from 'react';
import { Link } from 'react-router';
import { AiOutlineMenu } from 'react-icons/ai'; 
import useRole from '../../hooks/useRole';
import UserSideBar from './UserSideBar';
import AdminSideBar from './AdminSideBar'
import Loading from '../../pages/Loading';

const SideBar = () => {
    const [role,roleLoading] = useRole();

    if(roleLoading)
    {
      return <Loading></Loading>
    }

    return (
         <div className="bg-[#cbbeb5] space-y-2">

                   <div className="flex items-center gap-1.5">                     
                       <h1 className="hidden md:block"><Link to="/" className="btn btn-ghost text-large font-bold">Smart Decor</Link></h1>
                         <AiOutlineMenu size={20} />
                                   
                    </div> 

                    
                     <div>
                         {
                           role === 'customer' && <UserSideBar></UserSideBar>

                        }

                        {
                          role === 'admin' && <AdminSideBar></AdminSideBar>
                        }

                        <p className="space-y-7 text-small p-4"><Link to="my-profile">My Profile</Link></p>


                     </div>
                                     
                
             </div>
    );
};

export default SideBar;