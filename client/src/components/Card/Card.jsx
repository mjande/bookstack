import { Grid, Card } from "@mui/material";

import styles from "./Card.module.css";

export default function Book({ header, details }) {
  return (
    <Grid item>
      <Card className={styles.container}>
        <h3>{header}</h3>
        <p>{details}</p>
      </Card>
    </Grid>
  );
}
