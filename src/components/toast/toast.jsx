import React from 'react';
import styles from './toast.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setError } from '../../store/action';
import { getError } from '../../store/selectors';

const TOAST_LIFETIME = 5000;

export default function Toast() {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => setTimeout(() => dispatch(setError({
    isShown: false,
    message: '',
  })), TOAST_LIFETIME), [dispatch]);

  return error.isShown && (
    <div className={styles.toast}>{error.message}</div>
  );
}
