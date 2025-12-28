import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';



const Footer = () => {
    return (
        
        <footer className="footer sm:footer-horizontal bg-[#9ba59c]  text-small p-10">
                <nav>
                    <h6 className="footer-title">Our Contacts</h6>
                    <a className="link link-hover">style_decor@gmail.com</a>
                    <a className="link link-hover">+880171588700</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Available Time and Day</h6>
                    <a className="link link-hover">Sun-Thurs</a>
                    <a className="link link-hover">8am-8pm</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                   
                       <FaFacebookF></FaFacebookF>
                       <FaInstagram></FaInstagram>
                 
                    </div>
                </nav>
        </footer>
    );
};

export default Footer;