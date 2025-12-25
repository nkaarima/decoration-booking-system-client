import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MakeUserDecoratorRow = ({customer}) => {

    const {image,name,email}= customer || {};
    const {register, handleSubmit} = useForm();

    const axiosSecure= useAxiosSecure();

    const handleFormSubmit = (data) => {

        console.log(data);

        const {roleStatus} = data;

        const roleInfo = {

             email,
             role:roleStatus.toLowerCase()
        }

       axiosSecure.put('/make-user-decorator',roleInfo)
       .then(data => {
        if(data.data)
        {
            toast.success('user role has been updated');
        }
       })
        



         
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