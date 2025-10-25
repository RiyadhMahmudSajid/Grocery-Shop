import React from 'react';
import Herrobanner from './Herrobanner';
import Allpage from '../Layout/Allpage';
import Faq from '../Layout/Faq';

const Home = () => {
    return (
        <div>
            <Herrobanner></Herrobanner>
            <Allpage></Allpage>
            <Faq></Faq>
        </div>
    );
};

export default Home;