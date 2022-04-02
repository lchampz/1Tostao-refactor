import React from 'react'

import { useLoading } from '../../../request/hooks/Loading'
import { Background } from './styled';
import ImgWrapper from '../../atoms/ImgWrapper';
import Logo from '../../../assets/img/logo-white.png';
import { FadingBalls } from "react-cssfx-loading"


const Loading = () => {
  const { loading } = useLoading();

  return (
    loading && (
      <Background>
        <ImgWrapper margin={'0px 0px 0px 40px'} url={Logo} imgWidth={'100%'} imgHeight={'100%'} width={'300px'} height={'120px'}/>
        <FadingBalls color="white" width="20px" height="20px" duration="0.5s" />
      </Background>
    )
  );
};

export default Loading;
