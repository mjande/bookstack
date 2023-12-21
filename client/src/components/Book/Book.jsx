import { Grid, Card } from "@mui/material";

import styles from "./Book.module.css";

export default function Book({ book }) {
  return (
    <Grid item>
      <Card className={styles.container}>
        <h3>{book.title}</h3>
        <p>
          by {book.author}{" "}
          {book.published_date ? `(${book.published_date})` : ""}
        </p>
      </Card>
    </Grid>
  );
}
