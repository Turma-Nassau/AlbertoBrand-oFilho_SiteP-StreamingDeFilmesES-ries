import styles from "../../styles/css/BasicButton.module.css";

export default function BasicButton({ text }) {
  return (
    <>
      <button className={styles.btn}>{text}</button>
    </>
  );
}
