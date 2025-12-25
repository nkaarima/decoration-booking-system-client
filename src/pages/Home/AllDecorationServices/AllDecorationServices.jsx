import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DecorationServiceCard from '../DecorationServiceCard/DecorationServiceCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';

const AllDecorationServices = () => {

   const axiosSecure=useAxiosSecure();

   const {data: serviceData = [], isLoading} = useQuery({
   
     queryKey:['allServices'],
     queryFn: async () => {

         const result = await axiosSecure.get('/all-services')
         return result.data
     }
     
   })

   if(isLoading)
   {
    return <Loading></Loading>
   }
    
    
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-40">
          {
             serviceData.map(data => <DecorationServiceCard key={data._id} data={data} />)
          }
        </div>
    );
};

export default AllDecorationServices;