import React from 'react';

const DecorationServiceCard = ({data}) => {

    const {image,description,cost} =data
    return (
        <div className="text-small w-[350px] h-[250px]">
            <img src={image} className="w-full h-full object-cover rounded-lg"></img>
             
             <div className="space-y-3.5">
                <p>{description}</p>
                 <div className="flex gap-2 items-center justify-center">
                     <p className="text-center">BDT {cost}</p>
                    <button className="btn">View More</button>
                 </div>
                
             </div>
            

            
        </div>
    );
};

export default DecorationServiceCard;