import styled from 'styled-components';
import { flexCenter } from '../../../../../styled.common';

export const Container=styled.div`
${flexCenter};
width:100%;
justify-content: stretch;
flex-wrap: wrap;
`;

export const EventsLabel = styled.div`
position: absolute;
top:2px;
right:5px;
`;


export const Day = styled.div<{ current: boolean }>`
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
