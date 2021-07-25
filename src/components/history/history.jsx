import React from 'react';
import Button from '../button/button';
import HistoryList from '../history-list/history-list';
import classNames from 'classnames';
import styles from './history.module.scss';
import { useDispatch } from 'react-redux';
import { clearHistory } from '../../store/action';

export default function History() {
  const dispatch = useDispatch();

  return (
    <section>
      <div className={classNames(styles.wrapper, 'container')}>
        <h2 className={styles.title}>История конвертация</h2>
        <HistoryList />
        <Button
          onClick={() => dispatch(clearHistory())}
        >
          Очистить историю
        </Button>
      </div>
    </section>
  );
}
