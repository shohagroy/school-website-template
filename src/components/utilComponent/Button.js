import React from 'react';

const Button = ({name}) => {
    return (
        <div>
            <button className='uppercase bg-[#FF630E] font-bold px-8 rounded-md py-3 hover:bg-[#130F40] duration-300 text-white'>{name}</button>
            
        </div>
    );
};

export default Button;