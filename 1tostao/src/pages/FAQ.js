import React from 'react'
import TwoColumn from '../components/templates/TwoColumn';
import Footer from '../components/organims/Footer/Footer';

import ImgWrapper from '../components/atoms/ImgWrapper'
import faqImg from '../assets/img/faqImg.png'

import Quests from '../components/molecules/QuestsFAQ'


const FAQ = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <TwoColumn  
                FirstColumn={
                    <ImgWrapper alt={'faqImg'} url={faqImg} width={'60%'} height={'60%'} />
                } 
                SecondColumn={
                    <Quests />
                }
            />
            <Footer />
        </div>
    );
}
 
export default FAQ;