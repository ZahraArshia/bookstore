import React from 'react';
// import Proptypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </>
  );
}

// Books.propTypes = {
//   books: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
// };
