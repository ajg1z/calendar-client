import { flexCenter } from './../../styled.common';
import styled from 'styled-components';

export const Container = styled.div`
border:1px solid #000;  
width: 100%;
padding:0px 200px;
position: relative;
height: 100%;
color:${({ theme }) => theme.colors.base};;
background-color: ${({ theme }) => theme.colors.base};;
`;

export const Switch = styled.div<{ top: number | string, left?: number | string, right?: number | string }>`
position: absolute;
${flexCenter};
transition: all 0.3s ease 0s;
top:${({ top }) => top};
right:${({ right }) => right};
width:60xp;
height:40px;
cursor: pointer;
left:${({ left }) => left};
`;


export const SwitchText = styled.p`
user-select: none;
position: absolute;
z-index: 2;
top: 50%;
transition: all 0.3s ease 0s;
${flexCenter};
width:100px;
height:100px;
color:black;
opacity: 0;
left:50%;
transform: translate(-50%,-50%);
:hover{
    opacity: 1;
    background-color: white;
    border-radius: 50%;
}
`

export const Top = styled.div`
    ${flexCenter}
    height: 80px;
    width:100%;
    gap: 0px 20px;
    justify-content: flex-end;
    margin:0px 0px 20px 0px;
`;



export const Select = styled.select`
border:1px solid white;
outline: none;
width:50px;
padding:10px;
background-color: ${({ theme }) => theme.colors.base};
`;

export const WeekDays = styled.div`
${flexCenter};
justify-content: stretch;
`;

export const EventsLabel = styled.div`
position: absolute;
top:2px;
right:5px;
`;

export const WeekDay = styled.div<{ current: boolean }>`
    width:180px;
    position: relative;
    ${flexCenter}
    height:100px ;
    border:1px solid white;
   ${props => props.current && `
       background-color:blue;
       `
    };
`

export const Body = styled.div`
${flexCenter};
width:100%;
justify-content: stretch;
flex-wrap: wrap;
`;
