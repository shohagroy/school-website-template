import React from 'react';

const Banar = () => {
    return (
        <div className='banar-container'>
            <div className='w-[100%] h-[80vh] bg-[#130f40bb]'>
                <div className='max-w-[1000px] text-center m-auto text-white z-[15] h-[80vh] flex flex-col justify-center items-center'>
                    <p className='text-[#FF630E] text-xl p-2 uppercase font-bold'>Start learning from home</p>
                    <h1 className='p-4 text-7xl font-bold'>Connect With Our Expert And Start Learning Today</h1>
                    <p className='text-lg w-[50%] font-bold'>We are providing high-quality online courses to improve your skill. Our all instructors are highly experienced and experts.</p>
                    <div>
                        <button className='bg-[#FF630E] hover:text-[#FF630E] duration-300 text-white p-3 px-7 font-bold hover:bg-white rounded-md m-3'>FIND COURSES</button>
                        <button className='bg-white text-[#FF630E] p-3 px-7 font-bold hover:bg-[#FF630E] hover:text-white duration-300 rounded-md m-3'>START FREE TRIAL</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Banar;