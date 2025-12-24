import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const ManageAccountRow = ({account}) => {

    const {name,email,speciality,experience_years,accountStatus} = account || {};


    const axiosSecure=useAxiosSecure();

    const handleApprove =  async (status) => {

        const accountInfo={
             
            status
        }
    
        await axiosSecure.put(`/manage-decorator-account/${email}`,accountInfo)
        .then(() => {

            if(accountInfo.status === 'approved')
             {
               toast.success('Account is approved');
             }

             else if(accountInfo.status === 'disenabled'){
                toast.success('Account is disenabled')

             }

             
        })
        .catch(error => {
           toast.error(error?.message)
        });
        

    }

    
    return (
        <tr>
     
          <td>
          
          <div>{name}</div>      
        </td>
       
        <td>
          {email}
          
          <br />
        </td>

        <td>{speciality}</td>
        <td>{experience_years}</td>

        <td>
          <button onClick={()=>handleApprove('approved')} className="btn bg-green-200 rounded-lg">
              {
                 accountStatus==='approved' ? <span>Approved</span> : <span>Approve</span>
                }</button>
          
        </td>

        <td>
          <button onClick={()=>handleApprove('disenabled') } className="btn bg-red-500 rounded-lg">
            
            {
               accountStatus==='disenabled' ? <span>Disenabled</span> : <span>Disable</span>
            }</button>
         
        </td>

        </tr>
    );
};

export default ManageAccountRow;