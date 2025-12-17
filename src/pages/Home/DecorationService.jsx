import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

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
            <h1 className="text-large font-bold text-center mb-2.5">Our Services</h1>

          <div className="w-full grid grid-cols-3 gap-4">
             
             {serviceData.map(data => <img key={data._id} src={data.image} className="w-full h-full object-cover"></img>)}
          </div>


        </div>
    );
};

export default DecorationService;