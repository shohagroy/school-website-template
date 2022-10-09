import React from 'react';
import Button from '../utilComponent/Button';
import ContainerHeading from '../utilComponent/ContainerHeading';

import c1 from '../../assets/cat-1.jpg'
import c2 from '../../assets/cat-3.jpg'
import c3 from '../../assets/cat-4.jpg'
import c4 from '../../assets/cat-5.jpg'

const Categories = () => {
    return (
        <div className='bg-white h-[80vh]  flex justify-center items-center flex-col'>
            <ContainerHeading name1='categories' name2='Popular Categories'/>

            <div className='max-w-[1200px] m-auto   grid grid-cols-4 gap-6  m-10'>

            <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                <img src={c1} className='rounded-xl' alt="" />
                <h3 className='text-2xl text-[#130F40] font-bold p-4'>Development</h3>
                <p className='text-gray-500 font-bold mb-3 text-xl'>6 Courses</p>
            </div>

            <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                <img src={c2} className='rounded-xl' alt="" />
                <h3 className='text-2xl text-[#130F40] font-bold p-4'>Business</h3>
                <p className='text-gray-500 font-bold mb-3 text-xl'>8 Courses</p>
            </div>

            <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                <img src={c4} className='rounded-xl' alt="" />
                <h3 className='text-2xl text-[#130F40] font-bold p-4'>Heath & Fitness</h3>
                <p className='text-gray-500 font-bold mb-3 text-xl'>6 Courses</p>
            </div>

            <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                <img src={c3} className='rounded-xl' alt="" />
                <h3 className='text-2xl text-[#130F40] font-bold p-4'>Web Design</h3>
                <p className='text-gray-500 font-bold mb-3 text-xl'>7 Courses</p>
            </div>

            </div>
            <Button name='all categories'/>
        </div>
    );
};

export default Categories;