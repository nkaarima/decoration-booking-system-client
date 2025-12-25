import React, { useEffect, useState } from 'react';
import AssignDecoratorTable from '../Tables/Admin/AssignDecoratorTable';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AssignDecorator = () => {
  
    const axiosSecure=useAxiosSecure();

    const [allUsers,setAllUsers] = useState([]);
    
    useEffect(()=> {

         axiosSecure.get('/all-bookings')
         .then(data => {
                 setAllUsers(data.data)       
           
         })
                
             
        },[axiosSecure])

        //console.log(allUsers);

    const paidUser= allUsers.filter(user => user.isPaid === true)
     
    return (
        <div>
           <AssignDecoratorTable paidUser={paidUser}></AssignDecoratorTable>
        </div>
    );
};

export default AssignDecorator;