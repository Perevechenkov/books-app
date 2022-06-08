import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onClose}></div>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>{props.children}</div>,
        document.getElementById('overlay-root')
      )}
    </>
  );
}
