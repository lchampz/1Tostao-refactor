import React from 'react'

import Header from '../components/molecules/Header/Header.js';
import CategoryCarroussel from '../components/molecules/CategoryCarroussel'
import User from '../components/molecules/User/index.js';

const Home = () => {

    return(
        <div>
            <Header />
            <CategoryCarroussel />
            <User/>
        </div>   
    )
}

export default Home