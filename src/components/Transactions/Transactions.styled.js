import styled from 'styled-components';
export const TransactionsTable = styled.table`
margin-left:auto;
margin-right: auto;
margin-top: 30px;
margin-bottom:40px;
width: 800px;
text-align: center;
gap: 5px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);`;
export const Thead = styled.thead`
background-color: rgb(46, 183, 207);
`;
export const ColumTitle = styled.tr`
text-transform: uppercase;
color: white;
font-size: 24px;
line-height: 36px;
`;
export const Title = styled.th`padding-top:10px;
padding-bottom:10px;`;
export const BodyTable = styled.tbody`
`
export const Body = styled.tr`
&:nth-child(2n){
    background-color: rgb(245,245,245);
}`;
export const BodyElement = styled.td`
font-weight: 400;
font-size: 25px;
line-height: 30px;
color: grey;
`;
