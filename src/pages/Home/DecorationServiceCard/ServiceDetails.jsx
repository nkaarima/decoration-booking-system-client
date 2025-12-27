import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../Loading';
import BookModal from '../../../components/Modal/BookModal';

const ServiceDetails = () => {

    const [serviceData,setServiceData] = useState({});
     const [isOpen,setIsOpen] = useState(false);

    const {id} = useParams();
    //console.log(id);

     const closeModal = () => {
        setIsOpen(false);
     }
   
     useEffect(() => {

         axios.get(`${import.meta.env.VITE_API_URL}/service-details/${id}`)
         .then((data) => {
         //console.log(data.data);
        setServiceData(data.data);
       
    })

     }, [id])

    const {serviceName,serviceCategory,cost,unit,image,description} = serviceData;


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
                    <button onClick={() => setIsOpen(true)} className="btn text-small">Book Now</button>
                    <BookModal serviceData={serviceData} closeModal={closeModal} isOpen={isOpen}></BookModal>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;