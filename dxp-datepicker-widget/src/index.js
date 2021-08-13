import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClayDatePicker from '@clayui/date-picker';
import { getDateFormat as getDateFormatMoment,
         getWeekDaysShort as getWeekDaysShortMoment,
         getFirstDayOfWeek as getFirstDayOfWeekMoment,
         getMonths as getMonthsMoment } from './moment_i18nInfo';
import { getDateFormat as getDateFormatManual,
        getWeekDaysShort as getWeekDaysShortManual,
        getFirstDayOfWeek as getFirstDayOfWeekManual,
        getMonths as getMonthsManual } from './manual_i18nInfo';
import { getDateFormat as getDateFormatDateFns,
        getWeekDaysShort as getWeekDaysShortDateFns,
        getFirstDayOfWeek as getFirstDayOfWeekDateFns,
        getMonths as getMonthsDateFns } from './date-fns_i18nInfo';


function DXPClayDatePicker(props) {
  const {translate, useMoment, useDateFns} = props;

  // these may become props for the wrapper component
  const spritemap = `${Liferay.ThemeDisplay.getPathThemeImages()}/clay/icons.svg`;
  const locale = `${Liferay.ThemeDisplay.getLanguageId()}`;

  const [value, setValue] = useState("");

  // this avoids a react warning about the second callback argument in useState() and useReducer()
  const setNewValue = (value, source) => {
    setValue(value);
  }

  if (translate) {
    // get localization info

    // although backend contains timezone, frontend version of ThemeDisplay does not
    //const timezone = `${Liferay.ThemeDisplay.getTimeZone()}`;
    let getDateFormat = getDateFormatManual;
    let getWeekdaysShort = getWeekDaysShortManual;
    let getFirstDayOfWeek = getFirstDayOfWeekManual;
    let getMonths = getMonthsManual;

    if (useMoment) {
      getDateFormat = getDateFormatMoment;
      getWeekdaysShort = getWeekDaysShortMoment;
      getFirstDayOfWeek = getFirstDayOfWeekMoment;
      getMonths = getMonthsMoment;
    }
    if (useDateFns) {
      getDateFormat = getDateFormatDateFns;
      getWeekdaysShort = getWeekDaysShortDateFns;
      getFirstDayOfWeek = getFirstDayOfWeekDateFns;
      getMonths = getMonthsDateFns;
    }

    return <ClayDatePicker
        months={getMonths(locale)}
        weekdaysShort={getWeekdaysShort(locale)}
        firstDayOfWeek={getFirstDayOfWeek(locale)}
        dateFormat={getDateFormat(locale)}
        placeholder={getDateFormat(locale)}
        onValueChange={setNewValue}
        value={value}
        spritemap={spritemap}
      />
  }
  else {
    return <ClayDatePicker
      onValueChange={setNewValue}
      value={value}
      spritemap={spritemap}/>
  }

}

/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
  ReactDOM.render(
      <div>
        <p><strong>How to use</strong>: Pick a date. Change locale in the URL.
          Pick a date again, check that <code>weekdays</code>, <code>months</code>, <code>firstDayOfWeek</code> and <code>dateFormat</code> are ok</p>
        <p>Current locale: <code>{`${Liferay.ThemeDisplay.getLanguageId()}`}</code></p>
        <p>A localization-aware datepicker (with moment, works for almost all locales)</p>
        <DXPClayDatePicker translate={true} useMoment={true}/>
        <p></p>
        <p>A localization-aware datepicker (with date-fns, you'll see it working for <code>zh</code>, <code>ar</code>, <code>de</code>, <code>es</code>, <code>en</code>, <code>in</code> and <code>fi</code>) locales</p>
        <DXPClayDatePicker translate={true} useDateFns={true}/>
        <p></p>
        <p>A localization-aware datepicker (with manual functions, you'll see it working for <code>es</code> locale only)</p>
        <DXPClayDatePicker translate={true}/>
        <p></p>
        <p>A regular datepicker</p>
        <DXPClayDatePicker/>
      </div>,

       document.getElementById(portletElementId)
   );

   // Liferay will issue the destroyPortlet event when the
   // portlet should unmount.
   Liferay.once('destroyPortlet', () => {
       ReactDOM.unmountComponentAtNode(container);
   });
}
