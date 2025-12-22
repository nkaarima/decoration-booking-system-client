import React, { use} from 'react';
import HeroDecorationServiceCard from './HeroDecorationServiceCard';

const HeroDecorationService = ({topServicePromise}) => {
  
     const serviceData= use(topServicePromise);
     console.log('The data is',serviceData);

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