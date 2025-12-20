import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DecorationServiceCard from '../DecorationServiceCard/DecorationServiceCard';

const AllDecorationServices = () => {

    const [serviceData, setserviceData] = useState([]);
 
    const axiosSecure=useAxiosSecure();
    
     useEffect(() => {

         axiosSecure.get('/all-services')
            .then(data => {
            
                setserviceData(data.data);
                
            })



     }, [axiosSecure])

     console.log(serviceData);

    
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-40">
          {
             serviceData.map(data => <DecorationServiceCard key={data._id} data={data} />)
          }
        </div>
    );
};

export default AllDecorationServices;