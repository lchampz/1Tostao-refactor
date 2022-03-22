import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 5% 10% ;
    flex-direction: column;

    background-color: white;
    padding: 50px;

    border-radius: 30px;
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.1);
`

export const Paragraph = styled.div`
    width: 100%;
    font-size: 30px;
    padding-top: 40px;
    display:inline-block;
    vertical-align:top;

    img {
        width: 300px;
        height: 300px;
        margin-bottom: 60px;
        margin-top: -60px;

        @media only screen and (min-width: 1600px) {
            margin-right: 130px;
        }

        @media only screen and (max-width: 900px) {
            margin-bottom: 10px;
            margin-top: -30px;
        }

        @media only screen and (max-width: 600px) {
            margin-right: -30px;
        }
    }
`

export const Button = styled.div`
    display: flex;

    width: 242px;
    height: 71px;

    text-align: center;
    align-items: center;
    justify-content: center;

    font-size: 27px;

    background-color: rgba(36, 211, 154, 1);
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    margin-top: -170px;

    @media only screen and (max-width: 1000px) {
            margin: 0 auto;
            margin-top: 30px;
        }

`