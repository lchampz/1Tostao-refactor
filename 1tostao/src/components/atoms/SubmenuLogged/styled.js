import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 120%;
    height: 100%;

`

export const Icon = styled.div`
    display: ${({ display }) => (display ? 'flex' : 'none')};
    cursor: pointer;
`

export const StickyMenu = styled.div`
    min-width: 30rem;
    height:110vh;
    margin-top: 90vh;
    display: ${({ display }) => (display ? 'flex' : 'none')};
    background-color: #191919;
    overflow-y: scroll;
`

export const WrapperHeader = styled.div`
    display: flex;
    margin: 1rem;
    flex-direction: column;
    margin-top: calc(0.5rem + 8%);
    
`

export const WrapperBody = styled.div`
    display: flex;
    width: 110%;
    margin-left: -1rem;
    min-height: 170px;
    background-color: #323232;
    align-items: center;
    text-align: center;
    justify-content: center;
    
    margin-top: 1rem; 
`

export const WrapperFooter = styled.div`
    display: flex;
    
    width: 100%;
`

export const Profile = styled.div`
    padding-bottom: 1rem;
    display: flex;
    flex-direction: row;
`

export const Name = styled.div`
    font-weight: bold;
    font-size: 25px;
    margin-top: 1.3rem;
    margin-left: 2rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    
`

export const Box = styled.div`
    background-color: #323232;
    display: flex;
    margin-left: -1rem;
    margin-right: 2rem;
    width: 7.6rem;
    height: 3rem;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 11px;
    
    p{
        margin-left: 11px;
        font-size: 35px;
        font-weight: bold;
    }
`

export const Line = styled.div`
    height: 3px;
    width: 85%;
    background-color: #323232;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '0')};
`

export const Close = styled.span`
    font-size: 20px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: -3rem;
    
    @media screen and (min-height: 950px) {
        margin-top: 2rem;
    }
`

export const Card = styled.div`
    margin: 0 auto;
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius+'px' : '5px')};
    overflow: hidden;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '10px')};

    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft+'px' : '10px')};
    margin-right: ${({ marginRight }) => (marginRight ? marginRight+'px' : '10px')};
    display: flex;
    flex-direction: column;
    text-align: center;

    height: 7rem;
    width: 5rem;

    box-shadow: 1px 4px 13px 3px rgba(0, 0, 0, 0.25);

    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};
`

export const P = styled.span`
    font-weight: bold;
    font-size: 14px;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '15px')};
`

export const Social = styled.span`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background-color: #323232;
    width: 100%;
    padding-right: 2rem
    width: 110%;
    margin-left: -1rem;
    padding-left: 1rem;
    height: 100%;

    .span {
        display: flex;
        flex-direction: row;
    }

`

export const Text = styled.span`
    font-size: 13px;
    align-items: center;
    margin-top: 0.2rem;
    margin-left: 0.3rem;
`

export const Infobox = styled.div`
    background-color: #323232;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '1rem')};
    width: 85%;
    padding: 17px;
    font-weight: bold;
    white-space: nowrap;

    &:last-child {
        margin-bottom: 3rem;
    }
`

export const Arrow = styled.div`
    margin: 0 auto;
    display: flex;
    padding-top: 3rem;
    font-size: 40px;
    margin-right: 3rem;
    align-items: center;
    text-align: center;
    cursor: pointer;
    margin-top: 30%;
    padding-left: ${({ left }) => (left ? '20px' : '')};
    
    &:hover{
        color: #24D39A; 
    }
`

export const Circle = styled.div`
    background-color: ${({ active }) => (active ? '#24D39A' : '#C4C4C4')};
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    cursor: pointer;
    margin: 0.7rem;
    margin-left: 0rem;
`