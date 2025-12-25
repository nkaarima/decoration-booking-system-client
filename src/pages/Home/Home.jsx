import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import HeroDecorationService from './HeroDecorationService/HeroDecorationService';

const Home = () => {
   
  //console.log(topServicePromise);
    return (
      <div className="space-y-7">
        <BackgroundImage></BackgroundImage>
         <HeroDecorationService></HeroDecorationService>
      </div>
    );
};

export default Home;