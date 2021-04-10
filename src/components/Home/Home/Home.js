import React from 'react';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Header from '../../Header/Header';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <MakeAppointment></MakeAppointment>
            {/* <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact> */}
        </div>
    );
};

export default Home;