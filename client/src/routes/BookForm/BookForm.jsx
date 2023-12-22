import { Form } from "react-router-dom";
import { Card, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BookForm() {
  return (
    <Card>
      <Form method={`${import.meta.env.BACKEND_URL}/api/books`} action="POST">
        <TextField label="Title" name="title" />
        <TextField label="Author" name="author" />
        <DatePicker
          label="Year of Publication"
          views={["year"]}
          name="published_date"
        />
      </Form>
    </Card>
  );
}
