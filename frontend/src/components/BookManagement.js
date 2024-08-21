import React, { useState, useEffect } from 'react';
import bookService from '../services/bookService';

function BookManagement() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await bookService.getAllBooks();
    setBooks(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await bookService.createBook(newBook);
    loadBooks();
  };

  return (
    <div>
      <h2>Book Management</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newBook.description}
          onChange={(e) => setNewBook({ ...newBook, description: e.target.value })}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookManagement;