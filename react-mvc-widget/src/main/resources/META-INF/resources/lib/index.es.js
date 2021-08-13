import React from 'react';
import ReactDOM from 'react-dom';
import ClayDatePicker from '@clayui/date-picker';

function SuperSimple(props) {
  const {myCustomNumberParameter, portletId} = props;

  console.log(props);

  return <div style={{border: '1px solid', width: '80%', margin: '1rem', padding: '0.5rem'}}>
              SuperSimple component here.
              <ul>
                <li>Received <b>{Object.entries(props).length}</b> props:
                  <code>
                   {Object.entries(props).map(([k,v]) => {
                     return (<span key={k}> {k}</span>);
                   })}
                  </code>
                </li>
                <li>Printing two props</li>
                <ul>
                  <li><code>myCustomNumberParameter</code>: {myCustomNumberParameter} </li>
                  <li><code>portletId</code>: {portletId}</li>
                </ul>
              </ul>
              <ClayDatePicker {...props}/>
          </div>
}

function MyDatePicker(props) {
    const {myCustomNumberParameter, portletId} = props;

    return <div style={{border: '1px solid', padding: '0.5rem'}}>
            Hey there, I'm my date picker
            <ul>
              <li>Received <b>{Object.entries(props).length}</b> props:
                 <code>
                   {Object.entries(props).map(([k,v]) => {
                      return (<span key={k}> {k}</span>);
                   })}
                 </code>
               </li>
               <li>Printing two props</li>
                 <ul>
                   <li><code>myCustomNumberParameter</code>: {myCustomNumberParameter} </li>
                   <li><code>portletId</code>: {portletId}</li>
                 </ul>
            </ul>
            <b>Calling subcomponent. <code>&lt;SuperSimple myCustomNumberParameter="7"/></code></b>
            <SuperSimple myCustomNumberParameter="7"/>
            <b>Calling subcomponent. <code>&lt;SuperSimple &#123;...props}/></code></b>
            <SuperSimple {...props}/>
            <b>Calling subcomponent. <code>&lt;SuperSimple &#123;...props} portletId="ABC"/></code></b>
            <SuperSimple {...props} portletId="ABC"/>
            <b>Calling subcomponent. <code>&lt;SuperSimple portletId="ABC" &#123;...props}/></code></b>
            <SuperSimple portletId="ABC" {...props}/>
            <b>Calling subcomponent. <code>&lt;SuperSimple/></code></b>
            <SuperSimple/>
          </div>
}

export default (props) => {
 	  return (
       <MyDatePicker  {...props} />
   	);
}

export function renderReactDOM(elementId, props) {
	ReactDOM.render(<MyDatePicker {...props}/>, document.getElementById(elementId));
  Liferay.once('destroyPortlet', () => {
      ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
  });
}

export function renderWrapped(elementId, props) {
  Liferay.Loader.require(
  	'@liferay/frontend-js-react-web@5.0.8/js/render',
  	(render) => {
  		render.default(
  			(props) => {
  			  return (
  					<MyDatePicker {...props}/>
  				);
  			  },
  			props,
  			document.getElementById(elementId));
        Liferay.once('destroyPortlet', () => {
          ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
        });
  		}
  );
}
