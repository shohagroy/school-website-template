import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <div className='bg-white sticky top-0'>
            <div className='max-w-[1200px] py-6 m-auto flex justify-between items-center'>
                <img className='max-w-[160px]' src={Logo} alt="Logo" />
                <div className='flex menu-container '>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Home</p>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Page</p>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Courses</p>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Webianrs</p>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Blog</p>
                    <p className='text-[20px] font-bold px-2 hover:text-[#FF630E] duration-300'>Contact</p>
                </div>
                    <div className='sticky'>
                        <p className='text-[20px] font-bold  hover:text-[#FF630E] duration-300'><i className=" fa-solid fa-cart-shopping"></i></p>
                        <p className='bg-[#FF630E] right-[-15px] top-[-15px] px-1 font-bold rounded-full text-white absolute'>0</p>
                    </div>
                <div className='text-white flex justify-center items-center px-7 py-3 rounded-md bg-[#FF630E]'>
                    <button className='px-4 border-r-2 '>Login</button>
                    <button className='px-4'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;