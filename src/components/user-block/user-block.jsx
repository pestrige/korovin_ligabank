import React from 'react';
import { Link } from 'react-router-dom';
import styles from './user-block.module.scss';

export default function UserBlock() {
  return (
    <ul className={styles.list}>
      <li>
        <Link
          to='/login'
          className={styles.link}
        >
          Войти в Интернет-банк
        </Link>
      </li>
    </ul>
  );
}
