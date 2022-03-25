import React from 'react'
import TwoColumn from '../components/templates/TwoColumn';

import Quests from '../components/molecules/QuestsFAQ/index'

const FAQ = () => {

    return (
        <>
            <TwoColumn  
                FirstColumn={
                    <div>teste</div>
                } 
                SecondColumn={
                    <Quests />
                }
            />
        </>
    );
}
 
export default FAQ;