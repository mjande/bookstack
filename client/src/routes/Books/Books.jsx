import { useLoaderData } from "react-router-dom";
import Book from "./Book.jsx";

import { Grid } from "@mui/material";

function BookList() {
  const books = useLoaderData();

  return (
    <section>
      <h2>All Books</h2>
      <Grid container spacing={2} justifyContent="center">
        {books.map((book) => (
          <Book data={book} key={book._id} />
        ))}
      </Grid>
    </section>
  );
}

export default BookList;
