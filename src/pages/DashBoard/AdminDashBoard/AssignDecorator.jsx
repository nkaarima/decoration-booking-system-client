import React, { useEffect, useState } from 'react';
import AssignDecoratorTable from '../Tables/Admin/AssignDecoratorTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignDecorator = () => {
  
    const axiosSecure=useAxiosSecure();

    const [paidUser,setPaidUser] = useState([]);
    
    useEffect(()=> {

         axiosSecure.get('/all-bookings')
         .then(data => {
         
            setPaidUser(data.data)
         })
         

        
             
        },[axiosSecure])
     
    return (
        <div>
           <AssignDecoratorTable paidUser={paidUser}></AssignDecoratorTable>
        </div>
    );
};

export default AssignDecorator;