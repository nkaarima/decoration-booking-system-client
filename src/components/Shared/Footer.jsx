import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';



const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="flex text-center space-y-2.5 flex-col items-center justify-between p-10 text-[18px] 
                    md:flex-row">
             
             <div>
                 <p className="font-bold">Contact us</p>
                 <p>smart_decor@gmail.com</p>
                 <p>+880171588700</p>
             </div>
   
            {/* Social media links */}          
            
             <div>

               <p>Social Links</p>
                
                <div className="flex">
                    <a><FaFacebookF></FaFacebookF></a>
                    <a><FaInstagram></FaInstagram></a>
                </div>
              
             
             </div>

             <div>
                Working hours:
                <p>8am-8pm</p>
                <p>Sun-Thurs</p>
             </div>
               
                   
            </footer>

             <p className="text-center">2025 All Rights Reserved- Smart Decor</p>  
        </div>
    );
};

export default Footer;