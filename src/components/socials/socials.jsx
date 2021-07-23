import React from 'react';
import classNames from 'classnames';
import styles from './socials.module.scss';

const SocialsList = [
  {name: 'facebook', link: 'https://facebook.com'},
  {name: 'instagram', link: 'https://instagram.com'},
  {name: 'twitter', link: 'https://twitter.com'},
  {name: 'youtube', link: 'https://youtube.com'},
];

export default function Socials() {
  return (
    <ul className={styles.list}>
      {
        SocialsList.map(({name, link}) => (
          <li key={name} className={styles.item}>
            <a
              href={link}
              className={classNames(styles.link, styles[name])}
              aria-label={name}
            >
            </a>
          </li>
        ))
      }
    </ul>
  );
}
