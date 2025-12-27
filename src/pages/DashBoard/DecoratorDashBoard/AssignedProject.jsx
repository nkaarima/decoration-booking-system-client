import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import AssignProjectRow from '../Tables/Decorator/AssignProjectRow';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';
import TodaysSchedule from './TodaysSchedule';

const AssignedProject = () => {

    const axiosSecure= useAxiosSecure();
    const {user} = useAuth();

    const {data: projects = [], isLoading} = useQuery({
 
        queryKey:['project-info',user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const result= await axiosSecure.get(`/my-projects/${user?.email}`)
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
               {/* head */}
               <thead>
                 <tr>
                   <th>Customer Name</th>
                   <th>Date</th>
                   <th>Location</th>
                   <th>Project Status</th>
                 </tr>
               </thead>
               <tbody>
           
                   {projects.map(project => <AssignProjectRow key={project._id} project={project} />)}
                
           
               </tbody>
               
             </table>

        </div>
    );
};

export default AssignedProject;