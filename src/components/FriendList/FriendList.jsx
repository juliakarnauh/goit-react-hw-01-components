import PropTypes from 'prop-types';
import {
  FriendUl, 
  FriendItem,
  Status,
  Avatar,
  Name,} from './FriendList.styled';
export function FriendList({ friends }) {
    return (
      <FriendUl>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <Status type={isOnline.toString()}>{isOnline}</Status>
            <Avatar src={avatar} alt={name} width="48"/>
            <Name>{name}</Name>
          </FriendItem>
        ))}
      </FriendUl>
    );
  }
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };