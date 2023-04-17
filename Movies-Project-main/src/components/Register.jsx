import BasicButton from "./BasicComponents/BasicButton";

import Link from "next/link";

import styles from "../styles/css/Register.module.css";

export default function Register() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h2>Register</h2>
        <p>Create a new account</p>
      </div>
      <form>
        <div className={styles.formContainer}>
          <input className={styles.input} type="text" placeholder="Name" />
          <input className={styles.input} type="email" placeholder="Email" />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Pasword"
          />
          <div className={styles.btnContainer}>
            <BasicButton text={"Sign Up"} />
          </div>
        </div>
      </form>

      <hr className={styles.line} />
      <span className={`${styles.minorText} ${styles.spanRedirect}`}>
        <p>Already have an account?</p>
        <Link href={"/"} className={styles.link}>
          Log in
        </Link>
      </span>
    </div>
  );
}
