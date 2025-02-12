import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Brands from '../../Pages/Brands/Brands';
import Cards from '../../Pages/Cards/Cards';
import Ollyo from '../../Pages/Ollyo/Ollyo';

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <Cards />
            <Ollyo />
        </div>
    );
};

export default Home;