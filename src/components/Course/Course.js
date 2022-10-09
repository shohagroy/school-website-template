import React from 'react';
import Button from '../utilComponent/Button';
import ContainerHeading from '../utilComponent/ContainerHeading';

const Course = () => {
    return (
        <div className='bg-[#F7F7F7] h-[80vh] '>
            <div className='max-w-[1200px] m-auto p-10'>
                <ContainerHeading name1='courses' name2='Explore Popular Courses'/>
                <Button name='all courses'/>
            </div>
        </div>
    );
};

export default Course;