import React from 'react';
import styles from './history-item.module.scss';

export default function HistoryItem() {
  return (
    <li className={styles.item}>
      <span>25.11.2020</span>
      <span>1000 RUB</span>
      <span>13,1234 USD</span>
    </li>
  );
}
