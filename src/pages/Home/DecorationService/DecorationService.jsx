import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DecorationServiceCard from './DecorationServiceCard';

const DecorationService = () => {

    const [serviceData,setService]= useState([]);

    const axiosInstance=useAxiosSecure();

    useEffect(() => {

        axiosInstance.get('/services-top-3')
        .then(data => {

         console.log(data);
         const services=data.data;
         setService(services);

    })


    }, [axiosInstance])

    return (
          <div>
            <h1 className="text-large font-bold text-center mb-2">Our Services</h1>

          <div className="w-full grid grid-cols-1 justify-center md:grid-cols-3 gap-4 items-center space-y-25 md:space-y-0">
             
             {serviceData.map(data => <DecorationServiceCard key={data._id} data={data}></DecorationServiceCard>)}
          
           </div>


        </div>
    );
};

export default DecorationService;