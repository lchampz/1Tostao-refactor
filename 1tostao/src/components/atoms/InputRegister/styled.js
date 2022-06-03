import styled from 'styled-components'

export const Label = styled.label`
    display: ${({ display }) => (display ? display : '')};
    text-align: left;
    justify-content: left;
    margin-top: ${({ marginTop }) => (marginTop ? marginTop : '-2rem')} ;
    color: #333333;
    font-size: 14px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '55%')};
    
`

export const WrapperTooltip = styled.div`
    background-color: white;
    position: absolute;
    display: ${({ visible }) => (visible ? 'flex' : 'none')} ;
    
    flex-direction: column;
    
    margin-left: 22rem;
    padding: 2rem;
    margin-top: 1.7rem;
    border-radius: 1.5rem;
    border-bottom-left-radius: 0px;
    border-bottom: 2px solid #24D39A;
    -webkit-box-shadow: 0px -3px 15px 5px rgba(0,0,0,0.18); 
    box-shadow: 0px -3px 15px 5px rgba(0,0,0,0.18);
`

export const ReqPass = styled.b`
    color: ${({ valid }) => (valid ? 'green' : 'red')};
    font-weight: bold;
    font-size: 12px;
    margin-top: 10px;
`