import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return <div className={styles.container}> {children} </div>;
};
