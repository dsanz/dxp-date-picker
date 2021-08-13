<%@ include file="/init.jsp" %>



<h3>Rendering via <code>&lt;react:component></code></h3>
<div id="react-component-placeholder-0">
<react:component module="lib/index.es" props='<%=
		HashMapBuilder.<String, Object>put(
			"myCustomNumberParameter", 0
		).build()
	%>'
/>

</div>


<h3>Rendering via <code>&lt;aui:script></code> using <code>ReactDOM.render()</code></h3>
<div id="<portlet:namespace />-1"></div>

<aui:script require="<%= mainRequire %>">
	main.renderReactDOM(
    '<portlet:namespace />-1',
    {myCustomNumberParameter: 1}
  );
</aui:script>


<h3>Rendering via <code>&lt;aui:script></code> using Liferay wrapper over <code>ReactDOM.render()</code></h3>
<div id="<portlet:namespace />-2"></div>
<aui:script require="<%= mainRequire %>">
	main.renderWrapped(
    '<portlet:namespace />-2',
    {myCustomNumberParameter: 2}
  );
</aui:script>
