import React from 'react';
import CurrencyField from '../currency-field/currency-field';
import Calendar from '../calendar/calendar';
import Button from '../button/button';
import styles from './form.module.scss';
import { InputLabel } from '../../const';

const selectedFrom = 'rub';
const selectedTo = 'usd';

export default function Form() {
  return (
    <form className={styles.form}>
      <CurrencyField
        label={InputLabel.SELL}
        activeOption={selectedFrom}
        withArrows
      />
      <CurrencyField
        label={InputLabel.BUY}
        activeOption={selectedTo}
      />
      <Calendar />
      <Button
        isBig
        className={styles.button}
      >
        Сохранить результат
      </Button>
    </form>
  );
}
