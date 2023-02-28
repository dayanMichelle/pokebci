import classnames from "classnames";
import styles from "./Logo.module.css";
import logo from "/icons/pokeball.png";
import "../../index.css";

type LogoProps = {
  width?: string;
  animate?: boolean;
};

export const Logo = ({ width = "200px", animate = false }: LogoProps) => {
  const logoClasses = classnames(styles.img, {
    [styles.animate]: animate,
  });

  return (
    <img
      style={{ width: width }}
      alt="logo pokemon"
      className={logoClasses}
      src={logo}
    />
  );
};
