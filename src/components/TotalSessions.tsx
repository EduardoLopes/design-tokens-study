import Card from "./Card";
import styles from "./TotalSessions.module.scss";

const { Content, Grid2, Footer, SpaceBetween, Title, SubTitle } = Card;

export default function TotalSessions() {
  return (
    <Card>
      <Content>
        <Grid2>
          <SpaceBetween.Vertical>
            <SubTitle>Total Sessions</SubTitle>
            <Title style={{ fontSize: "2em" }}>456</Title>
          </SpaceBetween.Vertical>
          <div className={styles.graphWrapper}>
            <div className={styles.graph}></div>
          </div>
        </Grid2>
      </Content>
      <Footer>
        <Grid2 style={{ alignItems: "center" }}>
          <SpaceBetween.Horizonal style={{ alignItems: "center" }}>
            <div className={styles.liveButton}>Live</div>
            <SubTitle>4 visitors</SubTitle>
          </SpaceBetween.Horizonal>
          <SubTitle style={{ textAlign: "right" }}>See Live View</SubTitle>
        </Grid2>
      </Footer>
    </Card>
  );
}
