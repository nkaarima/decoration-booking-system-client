import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '../../../Loading';

const MakeUserDecoratorRow = ({customer}) => {

    const {image,name,email}= customer || {};
    const {register, handleSubmit} = useForm();

    const queryClient = useQueryClient();
    
    const axiosSecure= useAxiosSecure();

    const{isPending, mutateAsync, reset}= useMutation({

      mutationFn: async (roleInfo) => await axiosSecure.put('/make-user-decorator',roleInfo),
      onSuccess : () => {
         
          toast.success('user role has been updated')
          queryClient.invalidateQueries(['customers'])
          reset();
      },
      onError: error => {
         
        toast.error(error.message);
      }
       
    })


    const handleFormSubmit = async (data) => {

        console.log(data);

        const {roleStatus} = data;

        const roleInfo = {

             email,
             role:roleStatus.toLowerCase()
        }

        await mutateAsync(roleInfo);
                
    }

  if(isPending)
  {
    return <Loading></Loading>
  }
    return (

           <tr>
       
         <td>
          
          <div className="w-25 h-25">
            <img src={image} className="w-full h-full object-cover rounded-[50px]"/>
            
            </div>      
        </td>
       
        <td>
          {name}
          
          <br />
        </td>

        <td>{email}</td>
       

        <td>

            <form onChange={handleSubmit(handleFormSubmit)}>
           
             <select {...register('roleStatus')}>
                <option>Customer</option>
                <option>Decorator</option>
             </select>

            </form>
          
        </td>

          
      </tr>
       
    );
};

export default MakeUserDecoratorRow;