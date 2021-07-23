import React from 'react';
import { Link } from 'react-router-dom';
import styles from './promo.module.scss';
import { AppRoute } from '../../const';
import blackCardPng from './black-card.png';
import blackCard2xPng from './black-card@2x.png';
import blackCardWebp from './black-card.webp';
import blackCard2xWebp from './black-card@2x.webp';
import whiteCardPng from './white-card.png';
import whiteCard2xPng from './white-card@2x.png';
import whiteCardWebp from './white-card.webp';
import whiteCard2xWebp from './white-card@2x.webp';

export default function Promo() {
  return (
    <section className={styles.promo}>
      <h2 className='visually-hidden'>
        Кредит в Лига Банке
      </h2>
      <div className={`${styles.inner} container`}>
        <div className={styles.text}>
          <h3 className={styles.title}>Лига Банк</h3>
          <p className={styles.subtitle}>Кредиты на любой случай</p>
          <Link  className={styles.link} to={AppRoute.CREDIT}>
            Рассчитать кредит
          </Link>
        </div>
        <div className={styles.cards}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${blackCardWebp} 1x, ${blackCard2xWebp} 2x`}
            />
            <img
              className={styles.black}
              src={blackCardPng}
              srcSet={`${blackCard2xPng} 2x`}
              alt='Черная карта Лига Банка'
            />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet={`${whiteCardWebp} 1x, ${whiteCard2xWebp} 2x`}
            />
            <img
              className={styles.white}
              src={whiteCardPng}
              srcSet={`${whiteCard2xPng} 2x`}
              alt='Белая карта Лига Банка'
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
