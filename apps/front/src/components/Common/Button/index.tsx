import { ReactNode } from "react";
import styles from "./index.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function Button({ children, onClick, disabled }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${disabled ? "" : styles.active}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
