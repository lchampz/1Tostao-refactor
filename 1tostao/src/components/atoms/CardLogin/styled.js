import styled from 'styled-components';

export const Container = styled.div`
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
   
    background: ${({ bgImg }) => (bgImg ? 'url('+bgImg+')' : '')};
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    
    transition: all 0.8 ease-in-out;
`
export const Wrapper = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 1.5rem; 
    margin-right: 1.5rem ;
    margin-top: 10rem;
    width: 30rem;
    height: 37rem;
    background-color: white;
    box-shadow: 1px 4px 13px 3px rgba(0, 0, 0, 0.25);
    margin-bottom: 5rem;

    @media screen and (max-width:1280px) {
        margin-bottom: 8rem;
    }

    @media screen and (max-width: 500px) {
        margin-top: 15rem;
        margin-bottom: 11rem;
    }

    p.login {
        font-size: 14px;
        padding-bottom: 15px; 

        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }
    p.cadastro {
        font-size: 14px;

        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }
    p.esquecer {
        font-size: 14px;
        float:right;


        &:hover {
            cursor: pointer;
            color: #24D39A;
            font-weight: bold;
        }
    }

    
`




export const WrapperInput = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding-top: 17rem;
`
