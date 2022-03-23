import React from 'react'

import Header from '../components/molecules/Header/Header.js';
import CategoryCarroussel from '../components/molecules/CategoryCarroussel'
import BannerAbout from '../components/molecules/BannerAbout'
import User from '../components/molecules/User/index.js';
import Footer from '../components/organims/Footer/Footer.js';

import { useTheme } from '../request/hooks/Theme'

const Home = () => {
    const { theme } = useTheme()

    return(
        <div>
            <Header />
            <CategoryCarroussel />
            <User/>
            <BannerAbout 
                titleColor={ theme.colors.titleColor } 
                border={ theme.colors.border } 
                textColor={ theme.colors.fontColor } 
                btnBg={ theme.colors.btnBg }
                bgCard={ theme.colors.secondaryBg }
                btnBgHover={ theme.colors.btnHover }
            />
            <Footer />
        </div>   
    )
}

export default Home