import { BiSearchAlt2, BiRightArrowAlt } from "react-icons/bi";
import { BsGrid3X3Gap } from "react-icons/bs";

import styles from "./Topbar.module.scss";

export default function Topbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Constructor</div>
      <div className={styles.search}>
        <BiSearchAlt2 size={24} />
        <input placeholder="search" />
        <BiRightArrowAlt size={24} />
      </div>
      <ul className={styles.menu}>
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/">Orders</a>
        </li>
        <li>
          <a href="/">Sections</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Clients</a>
        </li>
      </ul>
      <div className={styles.recent}>
        <a href="/">
          <BsGrid3X3Gap /> Recent
        </a>
      </div>
    </div>
  );
}
