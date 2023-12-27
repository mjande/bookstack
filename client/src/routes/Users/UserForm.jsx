import { Form } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";

// Cases:
//  Register
//  Login
//  Edit

export default function UserRegistration({ action }) {
  let heading, instructions, buttonText;

  if (action == "login") {
    heading = "Log In";
    instructions = "Enter your username and password to log in.";
    buttonText = "Log In";
  } else {
    heading = "Create User";
    instructions =
      "Enter a unique username and password to create a new user profile.";
    buttonText = "Register";
  }

  return (
    <section>
      <Card className="form-card">
        <Form method="post">
          <h2>{heading}</h2>
          <p>{instructions}</p>
          <TextField label="Username" name="username" />
          <TextField label="Password" name="password" type="password" />
          <Button variant="contained" type="submit">
            {buttonText}
          </Button>
        </Form>
      </Card>
    </section>
  );
}
