import React from 'react';
import ReactDom from 'react-dom';

// Mini Book project
function BookList() {
  return (
    <section>
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
const Author = () => <h4>James Clear</h4>;

ReactDom.render(<BookList />, document.getElementById('root'));
