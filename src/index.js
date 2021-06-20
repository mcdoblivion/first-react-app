import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Mini Book project
function BookList() {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
}

const author = 'James Clear';
const Book = () => {
  const title = 'Atomic Habits: An Easy & Proven Way to…';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{1 + 2}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
