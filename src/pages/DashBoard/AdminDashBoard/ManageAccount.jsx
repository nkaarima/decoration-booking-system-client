import React from 'react';
import ManageAccountRow from '../Tables/Admin/ManageAccountRow';
import Loading from '../../Loading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageAccount = () => {
   
    const axiosSecure=useAxiosSecure();

    const {data: accounts = [], isLoading} = useQuery({

        queryKey:['decorator-account'],
        queryFn: async () => {
            const result= await axiosSecure.get('/all-decorators')
            return result.data
        } 
    })

    if(isLoading)
    {
        return <Loading></Loading>
    }
    
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