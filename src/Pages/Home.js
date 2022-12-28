import React from 'react';
import Features from '../Components/Features';
import Hero from '../Components/Hero';
import HomeBanner from '../Components/HomeBanner';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Features></Features>
            <HomeBanner></HomeBanner>
        </div>
    );
};

export default Home;