import styled from 'styled-components'
import { scrollbar } from '../../../../../../styled.common';

export const Container = styled.div`
width: 100%;
height: 100%;
`;

export const LineInput = styled.div`
width:80%;
margin:0px auto 20px;
`;


export const Textarea = styled.textarea.attrs(props => {
    return { rows: 4 }
})`
resize: none;
width:100%;
background-color: black;
border: 1px solid white;
display: block;
padding:0px 5px;
outline: none;
${scrollbar}
`

export const Input = styled.input`
    padding:0px 5px;
    width:100%;
    color:white;
    background-color: black;
    height: 45px;
    border: 1px solid white;
    outline: none;
    font-size: 18px;
`;

export const Label = styled.label`
font-size: 18px;
`;