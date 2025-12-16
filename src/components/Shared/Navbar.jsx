import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import React, { use, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router';
import logoImg from '../../assets/decor-logo.png'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import placeholderImg from '../../assets/placeholder.jpg'

const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

    const {user,logOut} = use(AuthContext);

    console.log(user);

    const naviagate=useNavigate();

    const links = 
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/service">Services</NavLink></li>
      <li><NavLink to="/about-us">About Us</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    const handleLogout = () => {
       
        logOut()
        .then(()=> {
            toast.success('Logout is successful');
            naviagate('/')
        })
          
    }

    
    return (
          
          <div className="relative h-125">
             
              <img src="/home-bg.jpg" className="absolute inset-0 object-cover w-full h-full rounded-[20px]" alt="" />
         
               <div className="navbar shadow-sm">
                     
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                     
                     <div className="flex items-center">
                        
                     <img src={logoImg} className="w-1/4 h-1/4 rounded-4xl" alt="" />
                    <a className="btn btn-ghost text-3xl font-bold">Smart Decor</a>
                     </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[18px]">
                    {links}
                    </ul>
                </div>

                <div className="navbar-end">
                  
                   {/* Dropdown Menu */}
                  
                    <div className='relative'>
                    
                    <div className='flex flex-row items-center gap-3'>
                        {/* Dropdown btn */}
                        <div
                                onClick={() => setIsOpen(!isOpen)}
                                className='p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                <AiOutlineMenu />
                                <div className='hidden md:block'>
                                    {/* Avatar */}
                                    <img
                                     src={user && user.photoURL ? user.photoURL : placeholderImg}
                                    className='rounded-full'
                                    referrerPolicy='no-referrer'
                                    alt='profile'
                                    height='30'
                                    width='30'
                                    />
                                </div>

                         </div>
                    </div>

                    {isOpen && (
                        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                            Home
                            </Link>

                            {
                                user ? 
                                
                                <>
                                
                                <Link to="/dashboard" className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Dashboard</Link>
                                <a onClick={handleLogout} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Logout</a>
                                
                                
                                </>

                                : <>
                                
                                <Link to="/signup" className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>SignUp</Link>
                                 <Link to="/login" className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>Login</Link>
                                
                                
                                
                                </>
                            }
                            
                            
                            
                        </div>
                        </div>
                    )}
                    </div>
                  
                   
                </div>
        
        </div>


          </div>

       
        
    );
};

export default Navbar;