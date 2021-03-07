import styles from "./Infobar.module.scss";
import TotalSales from "./TotalSales";
import TotalSessions from "./TotalSessions";
import CustomerRate from "./CustomerRate";

export default function Infobar() {
  return (
    <div className={styles.wrapper}>
      <TotalSales />
      <TotalSessions />
      <CustomerRate />
    </div>
  );
}
