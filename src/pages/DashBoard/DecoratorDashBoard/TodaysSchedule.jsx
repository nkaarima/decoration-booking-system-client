import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../Loading';


const TodaysSchedule = () => {

   const {user} = useAuth();
   const axiosSecure= useAxiosSecure();

   const date = new Date().toLocaleDateString('en-gb');

    const {data: projects = [], isLoading} = useQuery({
 
        queryKey:['todayProject'],
        queryFn: async () => {
            const result= await axiosSecure.get(`/my-projects/${user?.email}`)

            return result.data
        }
         
    })
 const todayProjects= projects.filter(project => 
        new Date(project.serviceDate).toLocaleDateString('en-gb') === date)

        if(isLoading)
        {
          return <Loading></Loading>
        }
  

    //console.log(todayProjects);
    return (
        <div>
            <table className="table">
               {/* head */}
               <thead>
                 <tr>
                   <th>Customer Name</th>
                   <th>Date</th>
                   <th>Location</th>
                 </tr>
               </thead>
               <tbody>
                    
                   {todayProjects.map(project => <TodaysSchedule key={project._id} project={project} />)}
                
           
               </tbody>
               
             </table>
        </div>
    );
};

export default TodaysSchedule;