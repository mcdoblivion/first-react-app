import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX
// JSX rules
// return single element
// div / section / article or Fragment
// use camelCase for HTML attribute
// className instead of class
// close every element
// formatting
function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));
