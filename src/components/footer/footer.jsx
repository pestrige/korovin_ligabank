import React from 'react';
import classNames from 'classnames';
import styles from './footer.module.scss';
import Logo from '../logo/logo';
import MainMenu from '../main-menu/main-menu';
import Socials from '../socials/socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <ul className={styles.list}>
          <li className={styles.about}>
            <Logo />
            <p className={styles.paragraph}>
              150015, г. Москва, ул. Московская, д. 32
              Генеральная лицензия Банка России №1050
              Ⓒ Лига Банк, 2019
            </p>
          </li>
          <li className={styles.menu}>
            <MainMenu isVertical/>
          </li>
          <li className={classNames(styles.text, styles.mobile)}>
            <p className={styles.title}>*0904</p>
            <p className={styles.paragraph}>Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </li>
          <li className={classNames(styles.text, styles.phone)}>
            <p className={styles.title}>8 800 111 22 33</p>
            <p className={styles.paragraph}>Бесплатный для всех городов России</p>
          </li>
          <li className={styles.socials}>
            <Socials />
          </li>
        </ul>
      </div>
    </footer>
  );
}
