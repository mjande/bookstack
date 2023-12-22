import { Form } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";

export default function UserRegistration() {
  return (
    <section>
      <Card className="form-card">
        <Form method="post">
          <h2>Create User</h2>
          <p>
            Enter a unique username and password to create a new user profile.
          </p>
          <TextField label="Username" name="username" />
          <TextField label="Password" name="password" />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </section>
  );
}
