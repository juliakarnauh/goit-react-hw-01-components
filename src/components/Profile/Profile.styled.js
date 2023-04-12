import styled from 'styled-components';
export const ProfileDiv = styled.div`
 width: 300px;
 border-radius: 10px;
 margin-left: 10px;
 margin-top: 10px;
 border:2px grey solid;
 overflow: hidden;
 box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);`
export const Description = styled.div`
display: flex;
gap:15px;
flex-direction: column;
background-color: rgb(245,245,245);
justify-content: center;
padding: 20px 50px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;`
export const Avatar = styled.img`
  display: block;
  border-radius: 100px;
  width: 200px
`;

export const Name = styled.p`
text-align: center;
font-weight: 600;
font-size: 30px;
line-height: 45px;`;
export const Tag = styled.p`
text-align: center;
font-size: 20px;
line-height: 30px;
color: grey;`;
export const Location = styled.p`
text-align: center;
font-size: 20px;
line-height: 30px;
color: grey;`;
export const Stats = styled.ul`
display: flex;
justify-content: center;
background-color:rgb(215, 215, 215);
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;`;
export const Item = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
width: 100px;
text-align: center;
border: 1px rgb(143, 143, 143) solid;`;
export const Label = styled.span`
padding-top: 10px;
font-size: 20px;
line-height: 30px;
color: grey;`;
export const Quantity = styled.span`
padding-bottom: 10px;
font-weight: 600;
font-size: 24px;
line-height: 36px;`;
