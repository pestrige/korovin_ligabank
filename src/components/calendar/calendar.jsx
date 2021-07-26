import React from 'react';
import styles from './calendar.module.scss';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import Spinner from '../spinner/spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRates, setSendingFlag } from '../../store/action';
import { getIsSending, getError } from '../../store/selectors';
import Toast from '../toast/toast';

const DAYS_RANGE = 7;
const Time = {
  HOURS: 24,
  MINUTES: 60,
  SECONDS: 60,
  MILLISECONDS: 1000,
};
const msInDaysRange = DAYS_RANGE * Time.HOURS * Time.MINUTES * Time.SECONDS * Time.MILLISECONDS;
const currentDate = new Date();
const minDate = new Date(currentDate.getTime() - msInDaysRange);

export default function Calendar() {
  const dispath = useDispatch();
  const isLoading = useSelector(getIsSending);
  const { isShown } = useSelector(getError);
  const handleChange = (selectedDates) => {
    const selectedDate = selectedDates[0];
    dispath(setSendingFlag(true));
    dispath(fetchRates(selectedDate));
  };

  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label}>
        <span className={'visually-hidden'}>Выбор даты обмена</span>
        <Flatpickr
          name='calendar'
          className={styles.calendar}
          options={{
            defaultDate: currentDate,
            dateFormat: 'j.m.Y',
            maxDate: currentDate,
            minDate,
            onChange: handleChange,
          }}
        />
      </label>
      {isLoading && <Spinner />}
      {isShown && <Toast />}
    </fieldset>
  );
}
