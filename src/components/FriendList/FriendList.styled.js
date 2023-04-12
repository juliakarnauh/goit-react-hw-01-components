import styled from 'styled-components';
export const FriendUl = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 10xp;`;
export const FriendItem = styled.li`
display: flex;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
width: 300px;
padding: 10px 15px;
gap: 30px;
align-items: center;`;
export const Status = styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
background-color:${props  => {
  return props.type === 'true'? 'rgb(123, 228, 0)' : 'rgb(230, 52, 0)'
}};
`;
export const Avatar = styled.img``;
export const Name = styled.p`
font-weight: 600;
font-size: 30px;
line-height: 45px;`;
