# React portlet to test render

This is a react mvc project which renders the same component using 3 techniques:
* `ReactDOM.render()` from an `<aui:script>` tag
* Liferay portal react render wrapper function, loaded via AMD loader from an `<aui:script>` tag
* `<react:component>` tag

Goal is to assess the different mechanisms in terms of how they make available (or not) the portal react context (which provides the clay icons for instance) so that we can add some more things there.

Results are that only the tag render method can benefit from that context, meaning that pure JS projects deployed in the portal will not get any DXP react context.

As a result, adding i18n properties to the dxp react render context, for usage by the clay date picker wrapper, would **limit its usage** to JSP-based applications  

To try this:
* add the project to a liferay workspace for 7.3 or higher
* run blade `gw deploy` or alternatively, `blade gw build` then copy the resulting `build/dist/react.mvc.widget-1.0.0.jar` to a liferay bundle `osgi/modules` folder
* Drop the new portlet to a page 
