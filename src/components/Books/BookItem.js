import { b64_to_utf8 } from '../../helpers/base64';
import useForm from '../../hooks/use-form';
import styles from './BookItem.module.scss';

export default function BookItem(props) {
  const { title, author, cover } = props.bookItem;
  const coverSrc = b64_to_utf8(cover.toString());

  const { renderForm, toggleForm } = useForm(props.onEditBook, {
    title,
    author,
    cover: coverSrc,
  });

  return (
    <>
      {renderForm()}
      <li className={styles.book}>
        <div className={styles.cover}>
          <img src={coverSrc} alt='cover' />
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <h3>{title}</h3>
            <div className={styles.author}>{author}</div>
          </div>
          <div className={styles.actions}>
            <button onClick={props.onDelete}>Удалить</button>
            <button onClick={toggleForm}>Редактировать</button>
          </div>
        </div>
      </li>
    </>
  );
}
