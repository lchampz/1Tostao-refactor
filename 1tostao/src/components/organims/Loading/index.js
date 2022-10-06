import React from 'react'

import { useLoading } from '../../../request/hooks/Loading'
import { Background } from './styled';
import { FadingBalls } from "react-cssfx-loading"


const Loading = () => {
  const { loading } = useLoading();

  return (
    loading && (
      <Background>
        <FadingBalls color="white" width="20px" height="20px" duration="0.5s" />
      </Background>
    )
  );
};

export default Loading;
