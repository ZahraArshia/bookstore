import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  function submitBookToStore(event) {
    event.preventDefault();
    const newBook = {
      id: uuid(),
      title,
      author,
    };
    dispatch(add(newBook));
    setTitle('');
    setAuthor('');
  }
  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <select key="author" defaultValue="Autor" onChange={(e) => setAuthor(e.target.value)}>
          <option value="all authors">all authors</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
}
