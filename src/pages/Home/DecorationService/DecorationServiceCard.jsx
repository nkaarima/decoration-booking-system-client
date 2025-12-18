import React from 'react';
import { Link } from 'react-router';

const DecorationServiceCard = ({data}) => {

    const {image,description,cost} =data
    return (
        <div className="text-small w-87.5 h-62.5 mx-auto">
            <img src={image} className="w-full h-full object-cover rounded-lg"></img>
             
             <div>
                <p className="mt-3">{description}</p>
                 <div className="flex gap-3 items-start justify-center m-3.5">
                     <p className="text-center">BDT {cost}</p>
                    <Link to='/service-details' className="btn rounded-lg text-small">View More</Link>
                 </div>
                
             </div>
            

            
        </div>
    );
};

export default DecorationServiceCard;