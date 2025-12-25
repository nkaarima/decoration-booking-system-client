import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import MakeUserDecoratorRow from '../Tables/Admin/MakeUserDecoratorRow';


const MakeUserDecorator = () => {

    const axiosSecure= useAxiosSecure();
    const [customers,setCustomers] = useState([]);
    useEffect(() => {
     
    axiosSecure.get('/all-customers')
    
    .then(data => {
         
         setCustomers(data.data)
    })

    },[axiosSecure])

    axiosSecure.get()
    return (
        <div>
            <table className="table">
   

        <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
        </thead>
        <tbody>

            {
                customers.map(customer => <MakeUserDecoratorRow key={customer._id} customer={customer}></MakeUserDecoratorRow>)
            }
   
       
    </tbody>
    
  </table>
        </div>
    );
};

export default MakeUserDecorator;