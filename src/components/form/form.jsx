import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyField from '../currency-field/currency-field';
import Calendar from '../calendar/calendar';
import Button from '../button/button';
import styles from './form.module.scss';
import { getRates, getHistory, getDate } from '../../store/selectors';
import { updateHistory } from '../../store/action';
import { InputLabel, CurrencyFieldType, Currency } from '../../const';

const MAX_HISTORY = 10;

const formatValue = (value) => {
  // убираем ноль в начале строки, если значение целое
  if (value.charAt(0) === '0' && value.length > 1 && !value.includes('.')) {
    value = value.substring(1);
  }
  // заменяем , на .
  if (value.indexOf(',') !== -1) {
    value = value.replace(',', '.');
  }

  return value;
};

const getResult = (value, sellRate, BuyRate) => +(value * sellRate / BuyRate).toFixed(4);

export default function Form() {
  const dispatch = useDispatch();
  const date = useSelector(getDate);
  const history = useSelector(getHistory);
  const rates = useSelector(getRates);
  const [sellValue, setSellValue] = useState(0);
  const [buyValue, setBuyValue] = useState(0);
  const [sellCurrency, setSellCurrency] = useState(Currency.RUB);
  const [buyCurrency, setBuyCurrency] = useState(Currency.USD);

  useEffect(() => {
    setBuyValue(getResult(sellValue, rates[sellCurrency], rates[buyCurrency]));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  const handleSelectChange = (evt, type) => {
    const currency = evt.target.value;

    switch (type) {
      case CurrencyFieldType.SELL:
        setSellCurrency(currency);
        setBuyValue(
          getResult(sellValue, rates[currency], rates[buyCurrency]),
        );
        break;
      case CurrencyFieldType.BUY:
        setBuyCurrency(currency);
        setBuyValue(
          getResult(sellValue, rates[sellCurrency], rates[currency]),
        );
        break;
      default:
        break;
    }
  };

  const handleInputChange = (evt, type) => {
    const value = formatValue(evt.target.value);
    if (isNaN(value)) {
      return;
    }

    switch (type) {
      case CurrencyFieldType.SELL:
        setSellValue(value);
        setBuyValue(
          getResult(value, rates[sellCurrency], rates[buyCurrency]),
        );
        break;
      case CurrencyFieldType.BUY:
        setSellValue(
          getResult(value, rates[buyCurrency], rates[sellCurrency]),
        );
        setBuyValue(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const array = history.slice();
    if (history.length >= MAX_HISTORY) {
      array.shift();
    }
    dispatch(updateHistory([...array, {
      id: Math.random().toString(36),
      date,
      sellValue,
      sellCurrency,
      buyValue,
      buyCurrency,
    }]));
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <CurrencyField
        type={CurrencyFieldType.SELL}
        label={InputLabel.SELL}
        withArrows
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        value={sellValue}
        activeCurrency={sellCurrency}
      />
      <CurrencyField
        type={CurrencyFieldType.BUY}
        label={InputLabel.BUY}
        onInputChange={handleInputChange}
        onSelectChange={handleSelectChange}
        value={buyValue}
        activeCurrency={buyCurrency}
      />
      <Calendar />
      <Button
        isBig
        type='submit'
        className={styles.button}
      >
        Сохранить результат
      </Button>
    </form>
  );
}
