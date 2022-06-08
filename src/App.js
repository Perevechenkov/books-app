import { useCallback, useEffect, useState } from 'react';

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

    const { title, author, cover } = book;

    localStorage.setItem(book.id, JSON.stringify({ title, author, cover }));
  };

  const deleteBookHandler = bookId => {
    localStorage.removeItem(bookId);
    setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
  };

  const editBookHandler = (bookId, newBookData) => {
    localStorage.setItem(
      bookId,
      JSON.stringify({
        title: newBookData.title,
        author: newBookData.author,
        cover: newBookData.cover,
      })
    );
    setBooks(prevBooks => {
      const newArr = [...prevBooks];
      const editedBook = newArr.find(book => book.id === bookId);
      newArr.splice(prevBooks.indexOf(editedBook), 1, {
        id: bookId,
        title: newBookData.title,
        author: newBookData.author,
        cover: newBookData.cover,
      });

      return newArr;
    });
  };

  return (
    <>
      <Books
        books={books}
        onAddBook={addBookHandler}
        onDeleteBook={deleteBookHandler}
        onEditBook={editBookHandler}
      />
    </>
  );
}

export default App;
