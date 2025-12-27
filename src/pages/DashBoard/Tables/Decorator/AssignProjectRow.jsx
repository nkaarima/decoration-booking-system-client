import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const AssignProjectRow = ({project}) => {

    const {customer,serviceDate,location,_id} = project;
    const axiosSecure= useAxiosSecure();
    const {register,handleSubmit} = useForm();

    const date = new Date(serviceDate).toLocaleDateString('en-gb');

    const handleStatusUpdate = async (data) => {
     
        try {

            const {status} = data;
            const statusUpdate= {
                _id,
                status
            }
         
            await axiosSecure.put('/project-status', statusUpdate)
            toast.success('Project Status is updated')
        } catch (error) {
            toast.error(error.message)
        }
         
    }
    return (
        <tr>
            <td>
                {customer.name}
            </td>

            <td>
                {date}
            </td>

            <td>
                {location}
            </td>

            <td>
                <form onChange={handleSubmit(handleStatusUpdate)}>
               
                   <select {...register('status')}>

                    <option value='assigned'>Assigned</option>
                     <option value='planning'>Planning Phase</option>
                     <option value='prep-materials'>Materials Prepared</option>
                     <option value='venue'>On the way to Venue</option>
                     <option value='progress'>Setup in Progress</option>
                     <option value='complete'>Completed</option>
                   </select>

                 </form>
              
            </td>

        </tr>
    );
};

export default AssignProjectRow;