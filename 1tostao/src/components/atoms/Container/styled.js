import styled from 'styled-components';

export const Container = styled.div`
    
    @media(min-widht: 768px){
        max-width: ${({maxContainer}) => (maxContainer ? maxContainer : "1200px")};
    }

    margin-left: auto;
    margin-right: auto;
    // padding-left: 15px;
    // padding-right: 15px;
    height:100vh;
    padding-top: ${({topContainer}) => (topContainer ? topContainer : "auto")};
    padding-bottom: ${({bottomContainer}) => (bottomContainer ? bottomContainer : "52rem")};
    margin-bottom: ${({mbottomContainer}) => (mbottomContainer ? mbottomContainer : "auto")};
    width: ${({widthContainer}) => (widthContainer ? widthContainer : "90%")};
    display:grid;
    justify-content:center;
`

export const Linha = styled.div`
    display: ${({rowDisplay}) => (rowDisplay ? rowDisplay : "flex")};
    flex-wrap: ${({rowWrap}) => (rowWrap ? rowWrap : "wrap")};
    background-color: ${({linhaCor}) => (linhaCor ? linhaCor : "#e6e6e6")};
    padding: ${({paddingLinha}) => (paddingLinha ? paddingLinha : "25px")};
    border-radius: ${({radiusCol}) => (radiusCol ? radiusCol : "10px")};
    align-items: center;
`

export const Col = styled.div`
    @media(min-width: 768px){
        flex: 1 50%;
        max-width: ${({maxCol}) => (maxCol ? maxCol : "100%")};
        position: relative;
        width: ${({colWidth}) => (colWidth ? colWidth : "100%")};
        padding-left: 15px;
        padding-right: 15px;
        padding:20px;
        transition: 0.2s ease-in;
        animation: fade 3s ease;
    }

    @keyframes fade {
        from {
            transform: scale(1.02);
            opacity: 0;
        }
        to{
            transform: scale(1);
            opacity: 1;
        }
    }

`
