import styles from "./Infobar.module.scss";
import Card from "./Card";

export default function Infobar() {
  return (
    <div className={styles.wrapper}>
      <Card>
        <Card.Content>
          <Card.Grid2>
            <div className={styles.info}>
              <div className={styles.title}>Total Sales</div>
              <div className={styles.value}>$281.90</div>
            </div>
            <div className={styles.graph}></div>
          </Card.Grid2>
        </Card.Content>
        <Card.Footer>
          <Card.Grid2>
            <div>6 toal orders</div>
            <div>view port</div>
          </Card.Grid2>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Content>
          <Card.Grid2>
            <div className={styles.info}>
              <div className={styles.title}>Total Sales</div>
              <div className={styles.value}>$281.90</div>
            </div>
            <div className={styles.graph}></div>
          </Card.Grid2>
        </Card.Content>
        <Card.Footer>
          <Card.Grid2>
            <div>6 toal orders</div>
            <div>view port</div>
          </Card.Grid2>
        </Card.Footer>
      </Card>
    </div>
  );
}
