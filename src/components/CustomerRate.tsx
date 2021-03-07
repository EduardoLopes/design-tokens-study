import { BsFillCircleFill } from "react-icons/bs";
import Card from "./Card";
import styles from "./CustomerRate.module.scss";

const { Content, Grid2, Footer, SpaceBetween, Title, SubTitle } = Card;

export default function CustomerRate() {
  return (
    <Card>
      <Content>
        <Grid2>
          <SpaceBetween.Vertical>
            <SubTitle>Customer Rate</SubTitle>
            <Title style={{ fontSize: "2em" }}>5.43%</Title>
          </SpaceBetween.Vertical>
          <div className={styles.graphWrapper}>
            <div className={styles.graph}></div>
          </div>
        </Grid2>
      </Content>
      <Footer>
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
      </Footer>
    </Card>
  );
}
