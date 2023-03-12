import Image from "next/image";
import Input from "../Input";
import styles from "./index.module.scss";

interface SearchBarProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearchClick?: React.MouseEventHandler<HTMLImageElement>;
}
function SearchBar({ value, onChange, onSearchClick }: SearchBarProps) {
  return (
    <div className={styles.container}>
      <Input value={value} onChange={onChange} />
      <Image
        className={styles.search}
        src="/images/icon-search.svg"
        width={20}
        height={20}
        alt="search"
        onClick={onSearchClick}
      />
    </div>
  );
}

export default SearchBar;
