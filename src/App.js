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
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }, []);

  useEffect(() => {
    setBooks(getBooksFromStorage());
  }, [getBooksFromStorage]);

  const addBookHandler = book => {
    setBooks(prevBooks => prevBooks.concat(book));
  };

  return (
    <>
      <BookForm onAddBook={addBookHandler} />
      <Books books={books} />
    </>
  );
}

export default App;
