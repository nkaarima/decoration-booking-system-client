import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '../../../Loading';

const ManageAccountRow = ({account}) => {

    const {name,email,speciality,experience_years} = account || {};

    const queryClient = useQueryClient();

    const axiosSecure=useAxiosSecure();

    const {isPending, mutateAsync,reset} = useMutation({

       mutationFn: async (accountInfo) => await axiosSecure.put(`/manage-decorator-account/${email}`,accountInfo),
       onSuccess: () => {
          
             reset();
             queryClient.invalidateQueries(['decorator-account'])
       }
    })

    const handleApprove =  async (status) => {

        const accountInfo={
             
            status
        }
    
        try{
          
          await mutateAsync(accountInfo)
        } 
        catch(error) {
           toast.error(error?.message)
        
          };
        

    }

    if(isPending)
    {
      return <Loading></Loading>
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
                 account.accountStatus==='approved' ? <span>Approved</span> : <span>Approve</span>
                }</button>
          
        </td>

        <td>
          <button onClick={()=>handleApprove('disenabled') } className="btn bg-secondary rounded-lg">
            
            {
               account.accountStatus==='disenabled' ? <span>Disenabled</span> : <span>Disable</span>
            }</button>
         
        </td>

        </tr>
    );
};

export default ManageAccountRow;