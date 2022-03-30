import styled from 'styled-components'

export const Container = styled.div`
@media(min-width:676px){
    max-width:640px;
}
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;

    display: flex; 
    height: ${({heightContainer}) => (heightContainer ? heightContainer: "100%")};
    margin: 0 auto;
    justify-content: center;
    text-align: center;
    padding-top: 14rem;


}
`

export const Card = styled.div`
    margin-top:-50px;
    background-color:white;
    width:640px;
    height: ${({heightCard}) => (heightCard ? heightCard: "100%")};
    border-radius:30px;
    padding:70px;
    box-shadow: 5px 5px 5px rgba(36, 36, 36, 0.471);
    
`

export const Label = styled.p`
    font-weight:500;
    font-size: ${({sizeLabel}) => (sizeLabel ? sizeLabel: "16px")};
    text-align: ${({alignLabel}) => (alignLabel ? alignLabel: "left")};
    color: ${({colorLabel}) => (colorLabel ? colorLabel: "black")};
`

