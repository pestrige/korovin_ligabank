import React from 'react';
import Exchanger from '../exchanger/exchanger';
import History from '../history/history';
import Promo from '../promo/promo';

export default function Main() {
  return (
    <main>
      <h1 className='visually-hidden'>
          Лига Банк - калькулятор валют
      </h1>
      <Promo />
      <Exchanger />
      <History />
    </main>
  );
}
