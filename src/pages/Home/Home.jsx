import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import HeroDecorationService from './HeroDecorationService/HeroDecorationService';
import TopDecorator from './TopDecorators/TopDecorator';

const Home = () => {
   
  //console.log(topServicePromise);
    return (
      <div className="space-y-7">
        <BackgroundImage></BackgroundImage>
         <HeroDecorationService></HeroDecorationService>
         <TopDecorator></TopDecorator>
      </div>
    );
};

export default Home;