import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendItem from '../friend-item/FriendItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <li key={name}>
            <FriendItem
              avatar={avatar}
              name={name}
              isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired
};

export default FriendsList;
