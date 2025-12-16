import React from 'react';
import SideBar from '../components/Shared/SideBar';
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
    return (
        
        <div className="flex gap-3">
    
              <SideBar></SideBar>

             <div className="min-h-screen flex-1">
                <Outlet></Outlet>
             </div>
        </div>
    );
};

export default DashBoardLayout;