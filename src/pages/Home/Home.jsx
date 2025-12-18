import React from 'react';
import DecorationService from './DecorationService/DecorationService';
import BackgroundImage from './BackgroundImage/BackgroundImage';

const Home = () => {
    
    return (
      <div className="space-y-7">
        <BackgroundImage></BackgroundImage>
         <DecorationService></DecorationService>
      </div>
    );
};

export default Home;