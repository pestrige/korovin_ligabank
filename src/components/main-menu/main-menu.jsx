import React from 'react';
import PropTypes from 'prop-types';
import MainMenuItem from '../main-menu-item/main-menu-item';
import classNames from 'classnames';
import styles from './main-menu.module.scss';
import { AppRoute } from '../../const';

const MenuItems = [
  {name: 'Услуги', path: AppRoute.SERVICES, id: 'services'},
  {name: 'Рассчитать кредит', path: AppRoute.CREDIT, id: 'credit'},
  {name: 'Конвертер валют', path: AppRoute.EXCHANGE, id: 'exchange'},
  {name: 'Контакты', path: AppRoute.CONTACTS, id: 'contacts'},
  {name: 'Задать вопрос', path: AppRoute.ASK, id: 'ask'},
];

export default function MainMenu({isVertical = false}) {
  return (
    <ul
      className={classNames(
        styles.menu,
        {
          [styles.row]: !isVertical,
        },
      )}
    >
      {MenuItems.map(({name, path, id}) => (
        <MainMenuItem
          key={id}
          name={name}
          path={path}
          isFooterLink={isVertical}
        />
      ))}
    </ul>
  );
}

MainMenu.propTypes = {
  isVertical: PropTypes.bool,
};
