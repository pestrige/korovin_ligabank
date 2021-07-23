import React from 'react';
import Form from '../form/form';
import styles from './exchanger.module.scss';

export default function Exchanger() {
  return (
    <section className={styles.exchanger}>
      <div className='container'>
        <h2 className={styles.title}>
          Конвертер валют
        </h2>
        <Form />
      </div>
    </section>
  );
}
