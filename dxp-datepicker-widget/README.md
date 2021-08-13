# DXP Datepicker Widget PoC

DXP Date Picker React wrapper over ClayDatePicker. Self-contained component which provides localized values for the DatePicker props according to current user locale, with no dependency of dxp react context injected by the react render infra.

It does so in 2 ways:
* Manually, with no libs
* Using `moment` library
* Using `date-fns` library (which is used by the original Clay Date Picker)

Usage:
* You may need to `npm install @clayui/provider @clayui/shared @clayui/date-picker` manually 
* Build the project with `npm run build`
* Copy `dist/dxp-datepicker-widget-1.0.0.jar` into a liferay `osgi/modules` folder
* Check logs for a successful module start
* Add the widget to a page
* Try the various datepicker instances in several locales. Locale changes can be done via URL
