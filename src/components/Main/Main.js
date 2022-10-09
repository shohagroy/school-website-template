import React from 'react';
import Categories from '../Categories/Categories';
import Course from '../Course/Course';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header/>
            <Categories/>
            <Course/>
        </div>
    );
};

export default Main;