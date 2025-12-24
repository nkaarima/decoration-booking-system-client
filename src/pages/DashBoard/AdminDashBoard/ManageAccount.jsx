import React, { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ManageAccountRow from '../Tables/Admin/ManageAccountRow';

const ManageAccount = () => {
    
    const axiosSecure=useAxiosSecure();
    const [accounts,setAccounts] = useState([]);

    axiosSecure.get('/all-decorators')
    .then(data => {
         setAccounts(data.data);
    })
    
    return (
          
          
        <div>
                <table className="table">
   

        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Speciality</th>
            <th>Experience</th>
            <th>Approve</th>
            <th>Disable</th>
        </tr>
        </thead>
        <tbody>

            {
                accounts.map(account => <ManageAccountRow key={account._id} account={account}></ManageAccountRow>)
            }
   
       
    </tbody>
    
  </table>
             </div>
    );
};

export default ManageAccount;