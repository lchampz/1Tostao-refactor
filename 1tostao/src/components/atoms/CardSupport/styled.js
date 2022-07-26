import styled from 'styled-components'

export const Wrapper = styled.div`
    
    padding-top: 7rem;
    text-align: center;
    
`

export const WrapperCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
`

export const Card = styled.div`
    display: flex;
    margin: 0 auto;
    margin-top: 3rem;
    margin-right: 5%; 
    margin-left: 5%; 
    align-items: center;
    text-align: center;
    justify-content: center;
    
    width: 23rem;
    height: 23rem;

    background-color: ${({ bgColor }) => (bgColor ? bgColor : '#525252')};
    border-radius: 40px;
    -webkit-box-shadow: 5px 5px 15px -8px rgba(0,0,0,0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
        border: 2px solid #24d39a;
        -webkit-box-shadow: 0px 6px 14px -6px rgba(36,211,154,0.58); 
        box-shadow: 0px 6px 14px -6px rgba(36,211,154,0.58);
    }
`

export const Title = styled.span`
    color: ${({ color }) => (color ? color : 'white')};
    font-size: 64px;
    font-weight: bold;
    margin: 0 auto;
    
`

export const Content = styled.div`
    margin: 0 auto;
    color: ${({ color }) => (color ? color : 'white')};
    font-weight: bold;
    font-size: 15px;
`