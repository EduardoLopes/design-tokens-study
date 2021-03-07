import styles from "./Infobar.module.scss";
import Card from "./Card";
import { BsFillCircleFill } from "react-icons/bs";
import TotalSales from "./TotalSales";

export default function Infobar() {
  return (
    <div className={styles.wrapper}>
      <TotalSales />
      <Card>
        <Card.Content>
          <Card.Grid2>
            <div className={styles.info}>
              <div className={styles.title}>Total Sessions</div>
              <div className={styles.value}>456</div>
            </div>
            <div className={styles.graph}></div>
          </Card.Grid2>
        </Card.Content>
        <Card.Footer>
          <Card.Grid2>
            <Card.Grid2>
              <div>Live</div>
              <div>4 visitors</div>
            </Card.Grid2>
            <div>See live view </div>
          </Card.Grid2>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Content>
          <Card.Grid2>
            <div className={styles.info}>
              <div className={styles.title}>Customer rate</div>
              <div className={styles.value}>5.43%</div>
            </div>
            <div className={styles.graph}></div>
          </Card.Grid2>
        </Card.Content>
        <Card.Footer>
          <Card.Grid2>
            <div>
              <BsFillCircleFill color="#bf95fc" style={{ marginRight: 16 }} />
              First time
            </div>
            <div>
              <BsFillCircleFill color="#fbae96" style={{ marginRight: 16 }} />
              Returning
            </div>
          </Card.Grid2>
        </Card.Footer>
      </Card>
    </div>
  );
}
