import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import HistoryItem from '../history-item/history-item';
import { getHistory } from '../../store/selectors';
import styles from './history-list.module.scss';

export default function HistoryList() {
  const history = useSelector(getHistory);

  return (
    <ul className={classNames(styles.list)}>
      {history.map((item) => (
        <HistoryItem
          data={item}
          key={item.id}
        />
      ))}
    </ul>
  );
}
