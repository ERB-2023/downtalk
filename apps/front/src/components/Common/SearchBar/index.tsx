import Image from "next/image";
import Input from "../Input";
import styles from "./index.module.scss";

function SearchBar() {
  return (
    <div className={styles.container}>
      <Input />
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
