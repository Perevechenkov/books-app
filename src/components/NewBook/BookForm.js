import { useRef } from 'react';

import styles from './BookForm.module.scss';

export default function NewBook(props) {
  const titleInputRef = useRef();
  const authorInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const id = Math.random().toString();
    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;

    if (title.trim().length === 0 && author.trim().length === 0) {
      return;
    }

    props.onToggle();
    props.onAddBook({ id, title, author });

    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='title'>Название</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='author'>Автор</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={styles['form-control__actions']}>
          <button type='submit'>Применить</button>
          <button type='button' onClick={props.onToggle}>
            Отмена
          </button>
        </div>
      </form>
    </section>
  );
}
