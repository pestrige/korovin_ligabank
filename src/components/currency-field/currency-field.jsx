import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Currency } from '../../const';
import classNames from 'classnames';
import styles from './currency-field.module.scss';

const currencies = Object.values(Currency);

export default function CurrencyField({label, activeOption, withArrows = false}) {
  const [value, setValue] = useState(activeOption);
  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

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
          defaultValue='0'
          type='text'
          className={styles.input}
        />
      </label>
      <label>
        <span className='visually-hidden'>Выбор валюты</span>
        <select
          name='currency'
          value={value}
          onChange={handleChange}
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
  activeOption: PropTypes.string.isRequired,
  withArrows: PropTypes.bool,
};
