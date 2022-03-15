// .link{
//     float:left;
//     color:white;
//     padding:20px;
//     font-family:Verdana, Geneva, Tahoma, sans-serif;
//     font-weight: 100;
//     font-size:20px;
// }

//  .link:hover{
//      cursor:pointer;
    
// }

// .config{
//     flex-direction: row;
//     float:right;
//     color:white;
//     font-family:Arial;
//     font-weight:100;
//     margin-top:20px;
// }

import styled from 'styled-components'

export const Links = styled.h2`
    float: ${({linkLogo}) => (linkLogo ? linkLogo: "left")};
    color: ${({linkColor}) => (linkColor ? linkColor: "white")};
    padding: ${({linkPadding}) => (linkPadding ? linkPadding: "20px")};
    font-size: ${({linkSize}) => (linkSize ? linkSize: "20px")};
    font-family: ${({linkFont}) => (linkFont ? linkFont: "Verdana, Geneva, Tahoma, sans-serif")};

        &:hover{
            cursor:pointer;
        }
`;


/* import react from 'react';

import styled from 'styled-components';

export const Link = styled.div`
color:white;
` */
