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

`

export const WrapperFooter = styled.div`
    display: flex;
`

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
`

export const Name = styled.div`
    font-weight: bold;
    font-size: 23px;
    margin-top: 1rem;
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
    width: 83%;
    background-color: #323232;
`

export const Close = styled.span`
    font-size: 20px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    
    @media screen and (min-width: 1500px) {
        margin-top: 2rem;
    }
`