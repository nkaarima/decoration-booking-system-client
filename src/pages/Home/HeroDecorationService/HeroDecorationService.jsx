import React from 'react';
import HeroDecorationServiceCard from './HeroDecorationServiceCard';
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../Loading'
const HeroDecorationService = () => {

  const axiosSecure=useAxiosSecure();
 
   const {data:serviceData = [],isLoading} = useQuery({

    queryKey: ['topService'],
    queryFn: async () => 
    {
       const result= await axiosSecure.get('/services-top-3')
       return result.data
    }

  })

  if(isLoading)
  {
    return <Loading></Loading>
  }
  console.log(serviceData);




    return (
        <div>
            
            <div>
            <h1 className="text-large font-bold text-center mb-6">Our Services</h1>

          <div className="w-full grid grid-cols-1 justify-center md:grid-cols-3 gap-4 items-center space-y-25 md:space-y-0">
             
             {serviceData.map(data => <HeroDecorationServiceCard key={data._id} data={data}></HeroDecorationServiceCard>)}
          
           </div>


        </div>

        </div>
    );
};

export default HeroDecorationService;