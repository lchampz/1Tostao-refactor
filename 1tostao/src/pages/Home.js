import React from 'react'

import Header from '../components/molecules/Header/Header.js';
import CategoryCarroussel from '../components/molecules/CategoryCarroussel'
import BannerAbout from '../components/molecules/BannerAbout'
import User from '../components/molecules/User/index.js';
import Footer from '../components/organims/Footer/Footer.js';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { useTheme } from '../request/hooks/Theme'

import "animate.css/animate.min.css";

const Home = () => {
    const { theme } = useTheme()

    return(
        <div>
            <Header />
            <CategoryCarroussel 
                titleColor={theme.colors.titleColor} 
                border={theme.colors.border} 
            />

            <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
                <User 
                    border={theme.colors.border} 
                    titleColor={theme.colors.titleColor} 
                    bgCard={theme.colors.secondaryBg} 
                    fontColor={theme.colors.fontColor}
                />
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__slideInUp" animateOnce={true}>
                <BannerAbout 
                    titleColor={ theme.colors.titleColor } 
                    border={ theme.colors.border } 
                    textColor={ theme.colors.fontColor } 
                    btnBg={ theme.colors.btnBg }
                    bgCard={ theme.colors.secondaryBg }
                    btnBgHover={ theme.colors.btnHover }
                />
            </AnimationOnScroll>
            
                <Footer />
            
        </div>   
    )
}

export default Home