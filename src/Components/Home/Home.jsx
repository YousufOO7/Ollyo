import React from 'react';
import Banner from '../../Pages/Banner/Banner';
import Brands from '../../Pages/Brands/Brands';
import Cards from '../../Pages/Cards/Cards';
import Ollyo from '../../Pages/Ollyo/Ollyo';
import Teams from '../../Pages/Teams/Teams';
import Features from '../../Pages/Features/Features';
import LocomotiveScroll from 'locomotive-scroll';


const Home = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div>
            <Banner />
            <Brands />
            <Cards />
            <Ollyo />
            <Teams />
            <Features />
        </div>
    );
};

export default Home;