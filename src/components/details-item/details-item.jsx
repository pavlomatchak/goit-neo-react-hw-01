import PropTypes from 'prop-types';
import css from './DetailsItem.module.css';

const DetailsItem = ({ label, value }) => {
  return (
    <li className={css.item}>
      {label}
      <b>{value}</b>
    </li>
  );
};

DetailsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default DetailsItem;
