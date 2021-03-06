import React, { useState, createContext, useContext } from 'react'

export const ThemeContext = createContext({});

export const themes = [
    {
        name: 'white',
        colors:{
            titleColor: '#2F2F2F', 
            bg:'#F3F3F3',
            fontColor: '#000000',
            btnBg: '#24D39A',
            btnColor: '#000000',
            btnHover: '#FFFFFF',
            border: 'rgba(47, 47, 47, 1)',
            carouselCard: '#4F4F4F',
            carouselLabel: '#FFFFFF',
            carouselHover: '#24D39A',
            faqBorder: '#24D39A',
            faqTitle: '#2F2F2F',
            cardSupportBg: '#FFFFFF',

        }
    },
    {
        name: 'dark',
        colors:{
            titleColor: '#F1F1F1',
            bg:'#292929',
            secondaryBg: '#1c1c1c',
            fontColor: '#FFFFFF',
            btnBg: '#FFFFFF',
            btnColor: '#000000',
            btnHover: '#1c1c1c',
            border: '#FFFFFF',
            carouselCard: '#FFFFFF',
            carouselLabel: '#242424',
            carouselHover: '#24D39A',
            faqBorder: '#FFFFFF',
            faqTitle: '#24D39A',
            cardSupportBg: '#525252'
        }
    }
]

export const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(themes[1])

    return(

        <ThemeContext.Provider value={{ theme, setTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    )
} 

export const useTheme = () => useContext(ThemeContext)
