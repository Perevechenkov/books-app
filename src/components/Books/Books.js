import useForm from '../../hooks/use-form';
import BookItem from './BookItem';

import styles from './Books.module.scss';

export default function Books(props) {
  const { renderForm, toggleForm } = useForm(props.onAddBook);

  let content = <h3>Добавьте новые книги</h3>;

  if (props.books.length > 0) {
    content = (
      <ul>
        {props.books.map(book => (
          <BookItem
            key={book.id}
            bookItem={book}
            onDelete={props.onDeleteBook.bind(null, book.id)}
            onEditBook={props.onEditBook.bind(null, book.id)}
            onRenderForm={renderForm}
          />
        ))}
      </ul>
    );
  }

  return (
    <>
      {renderForm()}
      <section className={styles.section}>
        <div className={styles.container}>
          <button onClick={toggleForm}>Добавить книгу</button>
          {content}
        </div>
      </section>
    </>
  );
}
