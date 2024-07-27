import PropTypes from 'prop-types';
import css from './Profile.module.css';
import DetailsItem from '../details-item/details-item';

const Profile = ({ avatar, location, username, stats, tag }) => {
  return (
    <div className={css.container}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar} />

      <h2 className={css.name}>{username}</h2>

      <p className={css.tag}>@{tag}</p>

      <p className={css.location}>{location}</p>

      <ul className={css.details}>
        {Object.keys(stats).map(key => {
          return <DetailsItem key={key} label={key} value={stats[key]} />;
        })}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  tag: PropTypes.string.isRequired,
};

export default Profile;
