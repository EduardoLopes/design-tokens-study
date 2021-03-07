import Card from "./Card";
import styles from "./TotalSales.module.scss";

const { Content, Grid2, Footer, SpaceBetween, Title, SubTitle } = Card;

export default function TotalSales() {
  return (
    <Card>
      <Content>
        <Grid2>
          <SpaceBetween.Vertical>
            <SubTitle>Total Sales</SubTitle>
            <Title style={{ fontSize: "2em" }}>$281.90</Title>
          </SpaceBetween.Vertical>
          <div className={styles.graphWrapper}>
            <div className={styles.graph}></div>
          </div>
        </Grid2>
      </Content>
      <Footer>
        <SpaceBetween.Horizonal>
          <SubTitle>6 total orders</SubTitle>
          <SubTitle>view port</SubTitle>
        </SpaceBetween.Horizonal>
      </Footer>
    </Card>
  );
}
