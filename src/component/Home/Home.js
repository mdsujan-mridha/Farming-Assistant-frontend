import React from 'react';
import Hero from '../Header/Hero';
import OrganicFood from '../Products/OrganicFood';
import Aboutus from '../About/Aboutus';
import CategoryCard from './CategoryCard';

const Home = () => {
    return (
        <div>
            <Hero />
            <CategoryCard />
            <OrganicFood />
            <Aboutus />
        </div>
    );
};

export default Home;