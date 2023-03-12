import styles from "./index.module.scss";

interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  length?: number;
  maxLength?: number;
}

function Input({ value, length, onChange, maxLength }: InputProps) {
  return (
    <div>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {maxLength && (
        <p className={styles.length}>
          {length}/{maxLength}
        </p>
      )}
    </div>
  );
}

export default Input;
