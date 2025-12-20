import React from 'react';

const HeroDecorationServiceCard = ({data}) => {
     
    const {image} =data

    return (
       <div className="text-small w-87.5 h-62.5 mx-auto">
            <img src={image} className="w-full h-full object-cover rounded-lg"></img>
             
            
        </div>
    );
};

export default HeroDecorationServiceCard;