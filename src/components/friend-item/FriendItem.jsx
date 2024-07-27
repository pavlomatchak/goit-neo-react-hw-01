import PropTypes from 'prop-types';
import css from './FriendItem.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
