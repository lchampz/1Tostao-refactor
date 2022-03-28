import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
` 

export const WrapperTitle = styled.div`
    display: flex;
    align-items: left;
    float: left;
    width: 4.1rem;
    justify-content: left;
    text-align: left;

    flex-direction: column;
`

export const Quest = styled.div`
    color: ${({ color }) => ( color ? color : 'rgba(47, 47, 47, 1)')};
    font-weight: bold;
    font-size: 20px;
    margin-top: 35px;
`

export const WrapperQuest = styled.div`
    display: flex;
    align-items: left;
    float: left;
    justify-content: left;
    text-align: left;

    flex-direction: column;
`

export const Answer = styled.div`
    margin-right: 20px;
    margin-top: 15px; 
    color: ${({ color }) => ( color ? color : 'rgba(47, 47, 47, 1)')};
    font-weight: thin;
    font-size: 20px;
    transition: opacity 0.3s ease-in-out, margin-top 0.5s ease-in-out;
    
    opacity: ${({ visible }) => ( visible ? '1' : '0')};
    margin-top: ${({ visible }) => ( visible ? '10px' : '-50px')};
    
`