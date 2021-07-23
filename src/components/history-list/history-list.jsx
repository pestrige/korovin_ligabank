import React from 'react';
import HistoryItem from '../history-item/history-item';
import styles from './history-list.module.scss';

const logs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function HistoryList() {

  return (
    <ul className={styles.list}>
      {logs.map((log) => (
        <HistoryItem
          key={log}
        />
      ))}
    </ul>
  );
}
