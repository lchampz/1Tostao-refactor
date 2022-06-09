import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
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
    height: 8.3rem;
    background-color: #323232;
    
    margin-top: 1rem; 
`

export const WrapperFooter = styled.div`
    display: flex;
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
    width: 6.1rem;
    height: 3rem;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 11px;
    
    p{
        margin-left: 10px;
        font-size: 35px;
        font-weight: bold;
    }
`

export const Line = styled.div`
    height: 3px;
    width: 27%;
    background-color: #323232;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop+'px' : '0')};
`

export const Close = styled.span`
    font-size: 20px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: -3rem;
    
    @media screen and (min-width: 1500px) {
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
    margin-top: 15px;
`

export const Social = styled.span`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;

    .p {
        margin-top: 20px;
    }

`