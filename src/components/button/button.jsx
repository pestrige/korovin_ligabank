import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

export default function Button({children, isBig = false, type = 'button', onClick, disabled = false}) {

  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        {
          [styles.big]: isBig,
          [styles.small]: !isBig,
        },
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  isBig: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
