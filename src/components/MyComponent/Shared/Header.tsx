import React from 'react';
import Navbar from '../Page/Navbar';
import Herrobanner from '../Page/Herrobanner';
import Allpage from '../Layout/Allpage';




const Header = () => {
   
    return (
        <div>
            <Navbar></Navbar>
            <Herrobanner></Herrobanner>
            <Allpage></Allpage>
           
        </div>
    );
};

export default Header;