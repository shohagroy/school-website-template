import React from 'react';
import Button from '../utilComponent/Button';
import ContainerHeading from '../utilComponent/ContainerHeading';

const Course = () => {
    return (
        <div className='bg-[#F7F7F7] h-[80vh] '>
            <div className='max-w-[1200px] m-auto p-10 flex flex-col justify-center items-center'>
                <ContainerHeading name1='courses' name2='Explore Popular Courses'/>

                <div className='grid grid-cols-3 gap-10 m-10'>
                    <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                        {/* <img src={} className='rounded-xl' alt="" /> */}
                        <h3 className='text-2xl text-[#130F40] font-bold p-4'>Development</h3>
                        <p className='text-gray-500 font-bold mb-3 text-xl'>6 Courses</p>
                    </div>
                    <div className='p-4 duration-300 hover:shadow-2xl bg-white rounded-xl text-center shadow-xl shadow-gray-200'>
                        {/* <img src={} className='rounded-xl' alt="" /> */}
                        <h3 className='text-2xl text-[#130F40] font-bold p-4'>Development</h3>
                        <p className='text-gray-500 font-bold mb-3 text-xl'>6 Courses</p>
                    </div>
                </div>

                <Button name='all courses'/>
            </div>
        </div>
    );
};

export default Course;