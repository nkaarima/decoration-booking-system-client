import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import HeroDecorationService from './HeroDecorationService.jsx/HeroDecorationService';

const Home = () => {
    
    return (
      <div className="space-y-7">
        <BackgroundImage></BackgroundImage>
         <HeroDecorationService></HeroDecorationService>
      </div>
    );
};

export default Home;