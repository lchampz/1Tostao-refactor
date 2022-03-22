import React from 'react'

import Header from '../components/molecules/Header/Header.js';
import CategoryCarroussel from '../components/molecules/CategoryCarroussel'
import BannerAbout from '../components/molecules/BannerAbout'
import User from '../components/molecules/User/index.js';
import Footer from '../components/organims/Menu/Footer/Footer.js';

const Home = () => {

    return(
        <div>
            <Header />
            <CategoryCarroussel />
            <User/>
            <BannerAbout />
            <Footer />
        </div>   
    )
}

export default Home