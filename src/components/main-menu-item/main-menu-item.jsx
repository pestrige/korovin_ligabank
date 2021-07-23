import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './main-menu-item.module.scss';

export default function MainMenuItem({name, path, isFooterLink}) {
  return (
    <li
      className={classNames(
        styles.item,
        {
          [styles.footer]: isFooterLink,
        },
      )}
    >
      <NavLink
        exact
        to={path}
        className={styles.link}
        activeClassName={classNames(
          styles.active,
          {
            'visually-hidden': isFooterLink,
          },
        )}
      >
        {name}
      </NavLink>
    </li>
  );
}

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isFooterLink: PropTypes.bool.isRequired,
};
