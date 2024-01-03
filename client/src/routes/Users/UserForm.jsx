import { Form } from "react-router-dom";
import { Button, Card, TextField } from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../../App";

export default function UserRegistration({ action }) {
  // Get current user from context
  const currentUser = useContext(AuthContext);

  // Create form state
  const [formData, setFormData] = useState({
    username: currentUser || "",
    password: "",
  });

  // Update form state based on form input
  function handleInput(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  // Customize instructions based on route
  let heading, instructions, buttonText;

  if (action == "login") {
    heading = "Log In";
    instructions = "Enter your username and password to log in.";
    buttonText = "Log In";
  } else if (action == "edit") {
    heading = "Edit User";
    instructions =
      "Make any desired changes, then click submit to change your user information.";
    buttonText = "Submit";
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
          <TextField
            label="Username"
            name="username"
            onInput={handleInput}
            value={formData.username}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            onInput={handleInput}
            value={formData.password}
          />
          <Button variant="contained" type="submit">
            {buttonText}
          </Button>
        </Form>
      </Card>
    </section>
  );
}
