import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Set up vars
const books = [
  {
    id: 1,
    title: 'Atomic Habits: An Easy & Proven Way to…',
    author: 'James Clear',
    img: 'https://images-na.ssl-images-amazon.com/images/I/713mzPe9SwS._AC_UL200_SR200,200_.jpg',
  },
  {
    id: 2,
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81255VTWssL._AC_UL200_SR200,200_.jpg',
  },
  {
    id: 3,
    title: 'Joshua Weissman: An Unapologetic Cookbook',
    author: 'Joshua Weissman',
    img: 'https://images-na.ssl-images-amazon.com/images/I/91ll975iVRS._AC_UL200_SR200,200_.jpg',
  },
];

// Mini Book project
function BookList() {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
