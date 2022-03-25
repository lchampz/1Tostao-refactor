import React, { useState, createContext, useContext, useEffect } from 'react'

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
            faqTitle: '#2F2F2F'
        }
    },
    {
        name: 'dark',
        colors:{
            titleColor: '#24D39A',
            bg:'#525252',
            secondaryBg: '#747474',
            fontColor: '#FFFFFF',
            btnBg: '#24D39A',
            btnColor: '#000000',
            btnHover: '#747474',
            border: '#FFFFFF',
            carouselCard: '#24D39A',
            carouselLabel: '#FFFFFF',
            carouselHover: '#4F4F4F',
            faqBorder: '#FFFFFF',
            faqTitle: '#24D39A'
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
