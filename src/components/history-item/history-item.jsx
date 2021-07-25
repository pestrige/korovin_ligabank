import React from 'react';
import PropTypes from 'prop-types';
import styles from './history-item.module.scss';
import { formatDate } from '../../utils/common';
import { DateFormat } from '../../const';

const formatValue = (value) => value.toString().replace('.', ',');

export default function HistoryItem({data}) {
  const {date, sellValue, buyValue, sellCurrency, buyCurrency} = data;
  return (
    <li className={styles.item}>
      <span>{formatDate(date, DateFormat.HISTORY)}</span>
      <span>{formatValue(sellValue)} {sellCurrency.toUpperCase()}</span>
      <span>{formatValue(buyValue)} {buyCurrency.toUpperCase()}</span>
    </li>
  );
}

HistoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    sellValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    buyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    sellCurrency: PropTypes.string.isRequired,
    buyCurrency: PropTypes.string.isRequired,
  }).isRequired,
};
