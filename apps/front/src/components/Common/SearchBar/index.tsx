import Image from "next/image";
import Input from "../Input";
import styles from "./index.module.scss";

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <Input value={value} onChange={onChange} />
      <Image
        className={styles.search}
        src="/images/icon-search.svg"
        width={20}
        height={20}
        alt="search"
      />
    </div>
  );
}

export default SearchBar;
