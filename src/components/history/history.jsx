import React from 'react';
import Button from '../button/button';
import HistoryList from '../history-list/history-list';
import classNames from 'classnames';
import styles from './history.module.scss';

export default function History() {
  return (
    <section>
      <div className={classNames(styles.wrapper, 'container')}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList />
        <Button>
          Очистить историю
        </Button>
      </div>
    </section>
  );
}
