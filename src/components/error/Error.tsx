import { Link } from "react-router-dom";
import { Modal } from "../modal";
import styles from "./Error.module.css";
import logo from "/icons/logo.webp";
type ErrorProps = {};

export const Error = ({}: ErrorProps) => {
  return (
    <Modal>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.img} src={logo} alt="logo" />
        </Link>
        <p>Pokemon not found</p>
      </div>
    </Modal>
  );
};
