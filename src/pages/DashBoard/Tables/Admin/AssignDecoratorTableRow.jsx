import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Loading';

const AssignDecoratorTableRow = ({user}) => {

    const {_id,serviceDate,serviceCategory,location,customer} = user || {};
   
    const {register, handleSubmit} = useForm();
   
     const axiosSecure= useAxiosSecure();

     const {data : decorator = [], isLoading}= useQuery({
       
        queryKey:['assignDecorator'],
        queryFn: async () => {
         const result= await axiosSecure.get('/all-decorators')
         return result.data

        }

     })
     if(isLoading)
     {
      return <Loading></Loading>
     }

     
     const date= new Date(serviceDate).toLocaleDateString('en-GB');

     const handleFormSubmit = async (data) => {

        console.log(data);

        const {decoratorInfo}= data;

        const decoratorName= decoratorInfo.split('-')[0];

        const projectInfo ={
           bookingId:_id,
           decoratorName,
           serviceDate,
           location,
           customer,
           projectStatus:'Assigned',
      
        }

        await axiosSecure.post('/projects',projectInfo)
        .then(data => {
           
           if(data)
           {
            toast.success('Decorator has been assigned')
           }
        })
        
        .catch(error => {
           toast.error(error.message);
        })
       

     }

    

    //console.log(user);

    return (
       <tr>
       
         <td>
          
          <div>{date}</div>      
        </td>
       
        <td>
          {serviceCategory}
          
          <br />
        </td>

        <td>{location}</td>

             
         <td>
       
         <form onChange={handleSubmit(handleFormSubmit)}>

         <select {...register('decoratorInfo')}>
         
          {decorator.map(decoratorData => <option key={decoratorData._id}>{decoratorData.name} - {decoratorData.speciality}</option>)}

         </select>
         
          </form>
        </td>

      </tr>
    );
};

export default AssignDecoratorTableRow;