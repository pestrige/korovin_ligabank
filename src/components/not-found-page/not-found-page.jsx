import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './not-found.module.scss';

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <h1
        className={styles.title}
      >
        Страница в разработке
      </h1>
      <Footer />
    </>
  );
}
