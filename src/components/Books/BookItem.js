import styles from './BookItem.module.scss';

export default function BookItem(props) {
  const { title, author } = props.bookItem;

  return (
    <li className={styles.book}>
      <h3>{title}</h3>
      <div className={styles.author}>{author}</div>
    </li>
  );
}
