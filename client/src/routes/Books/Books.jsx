import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card.jsx";

import { Grid } from "@mui/material";

function BookList() {
  const books = useLoaderData();

  return (
    <section>
      <h2>All Books</h2>
      <Grid container spacing={2} justifyContent="center">
        {books.map((book) => (
          <Card
            header={book.title}
            details={
              book.author +
              (book.published_date ? `(${book.published_date})` : "")
            }
            key={book._id}
          />
        ))}
      </Grid>
    </section>
  );
}

export default BookList;
