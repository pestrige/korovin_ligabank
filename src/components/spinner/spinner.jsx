import React from 'react';
import { useSelector } from 'react-redux';
import styles from './spinner.module.scss';
import { getIsSending } from '../../store/selectors';

export default function Spinner() {
  const isShown = useSelector(getIsSending);

  return isShown && (
    <svg className={styles.spinner} viewBox='0 0 50 50'>
      <circle className={styles.path} cx='25' cy='25' r='20' fill='none' strokeWidth='5'></circle>
    </svg>
  );
}
