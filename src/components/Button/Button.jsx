import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = memo(({ onClick }) => (
  <button className={styles.Button} onClick={onClick}>
    Load more
  </button>
));

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
