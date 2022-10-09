import React from 'react';
import Banar from '../Banar/Banar';
import Nav from '../Nav/Nav';
import SearchFild from '../SearchFild/SearchFild';

const Header = () => {
    return (
        <div>
            <SearchFild/>
            <Nav/>
            <Banar/>
        </div>
    );
};

export default Header;