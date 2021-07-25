import React from 'react';
import PropTypes from 'prop-types';
import { Currency } from '../../const';
import classNames from 'classnames';
import styles from './currency-field.module.scss';

const MAX_INPUT_LENGTH = 10;
const currencies = Object.values(Currency);

export default function CurrencyField({label, type, withArrows = false, onInputChange, onSelectChange, value, activeCurrency}) {

  return (
    <fieldset
      className={classNames(
        styles.fieldset,
        {
          [styles.arrows]: withArrows,
        },
      )}
    >
      <label className={styles.label}>
        {label}
        <input
          value={value}
          type='text'
          inputMode='numeric'
          className={styles.input}
          maxLength={MAX_INPUT_LENGTH}
          onChange={(evt) => onInputChange(evt, type)}
        />
      </label>
      <label>
        <span className='visually-hidden'>Выбор валюты</span>
        <select
          name='currency'
          value={activeCurrency}
          onChange={(evt) => onSelectChange(evt, type)}
          className={styles.select}
        >
          {currencies.map ((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </fieldset>
  );
}

CurrencyField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  withArrows: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange:  PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  activeCurrency: PropTypes.string.isRequired,
};
