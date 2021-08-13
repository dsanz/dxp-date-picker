import moment from 'moment/min/moment-with-locales';

function getLocaleData(locale) {
  const localeData = moment.localeData(locale.replace('_', '-'))
  console.log(localeData);
  return localeData;
}

export const getDateFormat = (locale) => {
  // with time, this format should likely be "LLL"
  return getLocaleData(locale).longDateFormat('L').replaceAll('D', 'd').replaceAll('Y', 'y');
  // see https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md#popular-mistakes
  // to understand why replacements are needed
}

export const getWeekDaysShort = (locale) => {
  return getLocaleData(locale).weekdaysShort();
}

export const getFirstDayOfWeek = (locale) => {
  return getLocaleData(locale).firstDayOfWeek();
}

export const getMonths = (locale) => {
  return getLocaleData(locale).months();
}
