import styled from 'styled-components'

export const Container = styled.div`
@media(min-width:676px){
    max-width: ${({widthContainer}) => (widthContainer ? widthContainer: "640px")};
}
    padding-left:15px;
    padding-right:15px;
    margin-left:auto;
    margin-right:auto;

    display: ${({displayContainer}) => (displayContainer ? displayContainer: "flex")};
    align-content: ${({alignContentContainer}) => (alignContentContainer ? alignContentContainer: "normal")};
    flex: ${({flexContainer}) => (flexContainer ? flexContainer: "0 0 50%")};
    flex-direction: ${({flexDirectionCont}) => (flexDirectionCont ? flexDirectionCont: "column")}
    height: ${({heightContainer}) => (heightContainer ? heightContainer: "100vh")};
    margin: ${({marginContainer}) => (marginContainer ? marginContainer: "0 auto")};
    justify-content: center;
    text-align: center;
    padding-top: ${({topContainer}) => (topContainer ? topContainer: "14rem")};

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

