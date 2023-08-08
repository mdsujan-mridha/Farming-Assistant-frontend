import React from 'react';
import Hero from '../Header/Hero';
import OrganicFood from '../Products/OrganicFood';
import Aboutus from '../About/Aboutus';
import CategoryCard from './CategoryCard';
import Contact from '../Contact/Contact';
import Map from './Map';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <CategoryCard />
            <OrganicFood />
            <Aboutus />
            <Contact />
            <Map />
            <Footer/>
        </div>
    );
};

export default Home;