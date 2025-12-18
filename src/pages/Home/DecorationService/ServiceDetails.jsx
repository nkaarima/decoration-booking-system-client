import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useDataLoading from '../../../hooks/useDataLoading';
import Loading from '../../Loading';

const ServiceDetails = () => {

    const [serviceData,setServiceData] = useState({});
    const {dataLoading,setDataLoading}= useDataLoading();

    const {id} = useParams();
    //console.log(id);

   
     useEffect(() => {

         axios.get(`${import.meta.env.VITE_API_URL}/plant-detail/${id}`)
         .then((data) => {
        setServiceData(data.data);
        setDataLoading(false);
    })

     }, [id,setDataLoading])

    const {serviceName,serviceCategory,cost,unit,image,description} = serviceData;

  if(dataLoading)
    {
        return <Loading></Loading>
    }    


    return (
        <div className="flex gap-20 items-start justify-center">
            <div className="w-125">
                <img src={image} className="w-full h-full object-cover" alt="" />
            </div>

            <div>
                <h1 className="text-large font-bold mb-4">{serviceName}</h1>
                <div className="space-y-8 text-small">
                    <p>Category: {serviceCategory}</p>
                    <p>{description}</p>
                    <p><span>BDT {cost}</span> {unit}</p>
                    <button className="btn text-small">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;