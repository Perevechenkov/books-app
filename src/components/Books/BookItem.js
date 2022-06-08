import styles from './BookItem.module.scss';

export default function BookItem(props) {
  const { title, author } = props.bookItem;

  return (
    <li className={styles.book}>
      <div className={styles.content}>
        <div className={styles.description}>
          <h3>{title}</h3>
          <div className={styles.author}>{author}</div>
        </div>
        <div className={styles.actions}>
          <button onClick={props.onDelete}>Удалить</button>
        </div>
      </div>
    </li>
  );
}
