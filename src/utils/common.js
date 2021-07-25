import { Currency, DateFormat } from '../const';

const DATE_SHIFT = 1;
const DATE_DIGITS = 10;
const SERVER_URL = 'https://www.cbr-xml-daily.ru';
const ROUTE_POSTFIX = 'daily_json.js';
const RUB_RATE = 1;

const normalizeDate = (date, needToShift = false) => {
  if (needToShift) {
    date = date + DATE_SHIFT;
  }
  return date < DATE_DIGITS ? `0${date}` : date;
};

export const formatDate = (date, type = DateFormat.SERVER) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const year = date.getFullYear();
  const rawMonth = date.getMonth();
  const rawDay = date.getDate();
  const month = normalizeDate(rawMonth, true);
  const day = normalizeDate(rawDay);

  switch (type) {
    case DateFormat.HISTORY:
      return `${day}.${month}.${year}`;
    case DateFormat.SERVER:
    default:
      return `${year}/${month}/${day}`;
  }
};

const isToday = (date) => date === formatDate(new Date());
export const getUrl = (date) => (
  isToday(date)
    ? `${SERVER_URL}/${ROUTE_POSTFIX}`
    : `${SERVER_URL}/archive/${date}/${ROUTE_POSTFIX}`
);

export const adaptRates = ({Valute}) => ({
  [Currency.RUB]: RUB_RATE,
  [Currency.USD]: Valute.USD.Value,
  [Currency.EUR]: Valute.EUR.Value,
  [Currency.GBP]: Valute.GBP.Value,
  [Currency.CNY]: Valute.CNY.Value,
});
