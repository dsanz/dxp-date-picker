import { de, es, enUS, zhCN, arSA, hi, fi } from 'date-fns/locale';

const locale2objectMap = {
  "es_ES" : es,
  "es" : es,
  "de_DE" : de,
  "de" : de,
  "en" : enUS,
  "en_US" : enUS,
  "zh_CN" : zhCN,
  "ar_SA" : arSA,
  "hi" : hi,
  "hi_IN": hi,
  "fi" : fi,
  "fi_FI" : fi
} // and so forth


const getLocaleObject = (locale) => {
  const localeObject = locale2objectMap[locale];
  return localeObject? localeObject : enUS;
}

export const getDateFormat = (locale) => {
  return getLocaleObject(locale).formatLong.date({ width: 'short' })
}

export const getWeekDaysShort = (locale) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(getLocaleObject(locale).localize.day(i, { width: 'narrow' }) )
  }
  return days;
}

export const getFirstDayOfWeek = (locale) => {
  return getLocaleObject(locale).options.weekStartsOn;
}

// inspired on https://github.com/date-fns/date-fns/issues/1729 and  https://spectrum.chat/date-fns/support/how-to-get-month-names~38b35d12-c640-4860-b79f-c4692758f64d
export const getMonths = (locale) => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push(getLocaleObject(locale).localize.month(i, { width: 'wide' }) )
  }
  return months;
}

