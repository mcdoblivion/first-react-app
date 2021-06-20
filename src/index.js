import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Set up vars
const firstBook = {
  title: 'Atomic Habits: An Easy & Proven Way to…',
  author: 'James Clear',
  img: 'https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg',
};

const secondBook = {
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81255VTWssL._AC_UL200_SR200,200_.jpg',
};

// Mini Book project
function BookList() {
  return (
    <section className="book-list">
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      />
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
