import { useRef } from 'react';
import { utf8_to_b64 } from '../../helpers/base64';
import Modal from '../UI/Modal';

import styles from './BookForm.module.scss';

export default function NewBook(props) {
  const { title, author, cover } = props.defaultValues;

  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const coverInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const id = Math.random().toString();
    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;
    let cover = coverInputRef.current.value;

    cover = utf8_to_b64(cover);

    if (title.trim().length === 0 && author.trim().length === 0) {
      return;
    }

    props.onToggle();
    props.onAddBook({ id, title, author, cover });
  };

  return (
    <Modal onClose={props.onToggle}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles['form-control']}>
          <label htmlFor='title'>Название</label>
          <input
            type='text'
            id='title'
            ref={titleInputRef}
            defaultValue={title}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='author'>Автор</label>
          <input
            type='text'
            id='author'
            ref={authorInputRef}
            defaultValue={author}
          />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor='cover'>Ссылка на обложку</label>
          <input
            type='text'
            id='cover'
            ref={coverInputRef}
            defaultValue={cover}
          />
        </div>
        <div className={styles.actions}>
          <button type='submit'>Применить</button>
          <button type='button' onClick={props.onToggle}>
            Отмена
          </button>
        </div>
      </form>
    </Modal>
  );
}
