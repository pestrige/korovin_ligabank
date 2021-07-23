import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './logo.svg';
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <Link to='/' className={styles.logo}>
      <img
        src={logoImg}
        width={149}
        height={25}
        alt='логотип Лига Банка'
      />
    </Link>
  );
}
