import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Mini Book project
function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>Atomic Habits: An Easy & Proven Way to…</h1>;
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    James Clear
  </h4>
);

ReactDom.render(<BookList />, document.getElementById('root'));
