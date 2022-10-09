import React from 'react';

const ContainerHeading = ({name1, name2}) => {
    return (
        <div className='my-4 text-center'>
            <p className='uppercase text-[#FF630E] font-bold'>{name1}</p>
            <h2 className='text-[#130F40] text-5xl font-bold py-3'>{name2}</h2>
        </div>
    );
};

export default ContainerHeading;