import BookItem from './BookItem';

import styles from './Books.module.scss';

export default function Tasks(props) {
  let content = <h2>Добавьте новые книги</h2>;

  if (props.books.length > 0) {
    content = (
      <ul>
        {props.books.map(book => (
          <BookItem
            key={book.id}
            bookItem={book}
            onDelete={props.onDeleteBook.bind(null, book.id)}
          />
        ))}
      </ul>
    );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>{content}</div>
    </section>
  );
}
