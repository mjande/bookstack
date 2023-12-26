import { Form } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";

export default function UserLogin() {
  return (
    <section>
      <Card className="form-card">
        <Form method="post">
          <h2>Log In</h2>
          <p>Enter your username and password to log in.</p>
          <TextField label="Username" name="username" />
          <TextField label="Password" name="password" type="password" />
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Form>
      </Card>
    </section>
  );
}
