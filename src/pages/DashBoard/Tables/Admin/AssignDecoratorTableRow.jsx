import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AssignDecoratorTableRow = ({user}) => {

    const {serviceDate,serviceCategory,location,customer} = user || {};
    const [decorator,setDecorator] = useState([]);

    const {register, handleSubmit} = useForm();
   
     const axiosSecure= useAxiosSecure();
     axiosSecure.get('/all-decorators')
     .then(data => {
        setDecorator(data.data)
     })

     const date= new Date(serviceDate).toLocaleDateString();

     const handleFormSubmit = async (data) => {

        console.log(data);

        const {decoratorInfo}= data;

        const decoratorName= decoratorInfo.split('-')[0];

        const projectInfo ={
           decoratorName,
           serviceDate,
           location,
           customer,
           projectStatus:'Assigned',
      
        }

        await axiosSecure.post('/projects',projectInfo)
        .then(data => {
           
           if(data.data.insertedId)
           {
            toast.success('Decorator has been assigned')
           }
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