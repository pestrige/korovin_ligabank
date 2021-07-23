import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss';

export default function Button({children, isBig = false, type = 'button'}) {
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
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  isBig: PropTypes.bool,
  type: PropTypes.string,
};
