import styled from 'styled-components';

export const Container=styled.div`
width:${({theme})=>theme.sizes.width.footer};
padding:20px 10px;
background-color: ${({theme})=>theme.colors.base};;
`

export const Logo=styled.div`
    width:60px;
    text-transform: uppercase;
    font-size: 35px;
    font-family: fantasy;
`

export const Copyright=styled.div`
    font-size: 20px;
    text-align: left;
`