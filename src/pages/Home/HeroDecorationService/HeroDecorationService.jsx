import React, { useEffect, useState } from 'react';
import useDataLoading from '../../../hooks/useDataLoading';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loading from '../../Loading';
import HeroDecorationServiceCard from './HeroDecorationServiceCard';

const HeroDecorationService = () => {
     const [serviceData,setService]= useState([]);

    const {dataLoading,setDataLoading} = useDataLoading();


    const axiosInstance=useAxiosSecure();

    useEffect(() => {

        axiosInstance.get(`${import.meta.env.VITE_API_URL}/services-top-3`)
        .then(data => {

          if(data.data)
          {  
              setDataLoading(false);
              //console.log(data);
              const services=data.data;
              setService(services);
          }

      })


    },[axiosInstance,setDataLoading])

    if(dataLoading)
    {
      return <Loading></Loading>
    }
    
    
    
    return (
        <div>
            
            <div>
            <h1 className="text-large font-bold text-center mb-2">Our Services</h1>

          <div className="w-full grid grid-cols-1 justify-center md:grid-cols-3 gap-4 items-center space-y-25 md:space-y-0">
             
             {serviceData.map(data => <HeroDecorationServiceCard key={data._id} data={data}></HeroDecorationServiceCard>)}
          
           </div>


        </div>

        </div>
    );
};

export default HeroDecorationService;