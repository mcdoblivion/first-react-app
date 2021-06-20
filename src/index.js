import React from 'react';
import ReactDom from 'react-dom';

// Nested components, React tools
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>Cuong Dong Minh</h1>;
const Message = () => <p>This is a message</p>;

ReactDom.render(<Greeting />, document.getElementById('root'));
