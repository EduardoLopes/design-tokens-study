import styles from "./Sidebar.module.scss";
import {
  BiGridVertical,
  BiRightArrowAlt,
  BiListUl,
  BiBarChartAlt,
} from "react-icons/bi";
import { IoMdBasket, IoMdPeople } from "react-icons/io";
import { FaCog } from "react-icons/fa";

import { BsGrid3X3Gap } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

export default function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <span />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="/">
              <BiGridVertical />
            </a>
          </li>
          <li>
            <a href="/">
              <CgNotes />
            </a>
          </li>
          <li>
            <a href="/">
              <BsGrid3X3Gap />
            </a>
          </li>
          <li>
            <a href="/">
              <BiListUl />
            </a>
          </li>
          <li>
            <a href="/">
              <IoMdBasket />
            </a>
          </li>
          <li>
            <a href="/">
              <IoMdPeople />
            </a>
          </li>
          <li>
            <a href="/">
              <BiBarChartAlt />
            </a>
          </li>
          <li>
            <a href="/">
              <FaCog />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.arrow}>
        <BiRightArrowAlt size={24} />
      </div>
    </div>
  );
}
