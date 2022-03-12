import styled from 'styled-components'

export const Card = styled.div`
    margin: 0 auto;
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius+'px' : '29px')};
    overflow: hidden;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '10px')};

    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft+'px' : '10px')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight+'px' : '10px')};
    display: flex;
    flex-direction: column;
    text-align: center;

    height: ${({ height }) => (height ? height+'px' : '16.375rem')};
    width: ${({ width }) => (width ? width+'px' : '12.524rem')};

    box-shadow: 1px 4px 13px 3px rgba(0, 0, 0, 0.25);
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    text-align: center;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
    color: ${({ color }) => (color ? color : 'black')};
    padding: ${({ contentPadding }) => (contentPadding ? contentPadding+'px' : '10px')};
    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};

    .label {
        margin-left: -20px;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        background-color: #4F4F4F;
        height: 79px;
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
    }
`