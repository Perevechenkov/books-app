import { useCallback, useEffect, useState } from 'react';

import BookForm from './components/NewBook/BookForm';
import Books from './components/Books/Books';

function App() {
  const [books, setBooks] = useState([]);

  const getBooksFromStorage = useCallback(() => {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      const valueToAdd = JSON.parse(localStorage.getItem(keys[i]));
      valueToAdd.id = keys[i];
      values.push(valueToAdd);
    }

    return values;
  }, []);

  useEffect(() => {
    setBooks(getBooksFromStorage());
  }, [getBooksFromStorage]);

  const addBookHandler = book => {
    setBooks(prevBooks => prevBooks.concat(book));

    const { title, author } = book;

    localStorage.setItem(book.id, JSON.stringify({ title, author }));
  };

  const deleteBookHandler = bookId => {
    localStorage.removeItem(bookId);
    setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
  };

  return (
    <>
      <BookForm onAddBook={addBookHandler} />
      <Books books={books} onDeleteBook={deleteBookHandler} />
    </>
  );
}

export default App;
