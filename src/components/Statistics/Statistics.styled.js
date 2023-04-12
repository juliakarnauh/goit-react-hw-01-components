import styled from 'styled-components';
import {generateColor} from './Statistics'
export const StatisticsDiv = styled.div`
width: 500px;
height:180px;
margin-left: 10px;
margin-top: 20px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
margin-bottom:10px;`
export const Title = styled.h2`
text-transform: uppercase;
text-align: center;
color: grey;
font-weight: 600;
font-size: 48px;
line-height: 72px;
padding-bottom: 20px;`;
export const StatsList = styled.ul`
display:flex;`;
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
text-align: center;
gap: 10px;
width: 100px;
padding-bottom: 10px;
background-color: ${generateColor};`
export const Label = styled.span`
font-weight: 600;
font-size: 25px;
line-height: 35px;
color: white;`;
export const Percentage = styled.span`
font-weight: 600;
font-size: 25px;
line-height: 35px;
color: white;`;


