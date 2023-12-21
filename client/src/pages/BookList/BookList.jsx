import { useLoaderData } from "react-router-dom";
import Book from "../../components/Book/Book";

import { Grid } from "@mui/material";

function BookList() {
  const books = useLoaderData();

  return (
    <section>
      <h2>All Books</h2>
      <Grid container spacing={2} justifyContent="center">
        {books.map((book) => (
          <Book book={book} key={book._id} />
        ))}
      </Grid>
    </section>
  );
}

export default BookList;
