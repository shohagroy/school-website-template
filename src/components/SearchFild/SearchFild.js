import React from 'react';

const SearchFild = () => {
    return (
        <div className='bg-[#0E0A38] text-white '>
            
            <div className='max-w-[1200px] m-auto flex justify-between items-center'>
                <div className='py-5 relative'>
                    <input className='bg-[#27234C] px-3 py-2 rounded-md' type="text" placeholder='Search Courses' />
                    <button className='absolute right-0 px-3 py-2'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='flex justify-center items-center mr-10'>
                        <i className="fa-solid fa-envelope"></i>
                        <p className='p-2'>support@example.com</p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <i className="fa-solid fa-phone"></i>
                        <p className='p-2'>+98 012345 6789</p>
                    </div>

                </div>

                <div>
                    <a className='p-2 hover:text-[#FF630E] duration-300' href="" target='_'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className='p-2 hover:text-[#FF630E] duration-300' href="" target='_'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a className='p-2 hover:text-[#FF630E] duration-300' href="" target='_'>
                        <i className="fa-solid fa-basketball"></i>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default SearchFild;