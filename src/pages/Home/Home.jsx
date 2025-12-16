import React from 'react';

const Home = () => {
    const images= ['./birthday-decor.webp','./corporate-decor.jpg','wedding-decor.webp'];
    return (
        <div>
            <h1 className="text-large font-bold text-center mb-2.5">Our Services</h1>

          <div className="w-full grid grid-cols-3 gap-4">
             
             {images.map(image => <img src={image} className="w-full object-cover h-full"></img>)}


          </div>
  



        </div>
    );
};

export default Home;