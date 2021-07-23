import React from 'react';
import Logo from '../logo/logo';
import MainMenu from '../main-menu/main-menu';
import UserBlock from '../user-block/user-block';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <nav className={styles.navigation}>
          <Logo />
          <MainMenu />
          <UserBlock />
        </nav>
      </div>
    </header>
  );
}
