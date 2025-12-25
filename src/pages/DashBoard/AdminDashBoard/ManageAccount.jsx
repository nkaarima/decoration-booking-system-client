import React, { use } from 'react';
import ManageAccountRow from '../Tables/Admin/ManageAccountRow';
import Loading from '../../Loading';

const accountPromise = fetch(`${import.meta.env.VITE_API_URL}/all-decorators`).then(res => res.json());

const ManageAccount = () => {
    
    const accounts= use(accountPromise);
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