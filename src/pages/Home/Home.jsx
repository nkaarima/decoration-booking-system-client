import React from 'react';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import HeroDecorationService from './HeroDecorationService/HeroDecorationService';

 const topServicePromise = fetch(`${import.meta.env.VITE_API_URL}/services-top-3`).then(res => res.json());

const Home = () => {
   
  //console.log(topServicePromise);
    return (
      <div className="space-y-7">
        <BackgroundImage></BackgroundImage>
         <HeroDecorationService topServicePromise={topServicePromise}></HeroDecorationService>
      </div>
    );
};

export default Home;