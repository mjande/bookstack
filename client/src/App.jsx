import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import MainLayout from "./layout/MainLayout/MainLayout.jsx";
import Home from "./routes/Home.jsx";
import BookList from "./routes/Books/Books.jsx";

import "./App.css";
import theme from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import BookForm from "./routes/Books/BookForm.jsx";
import UserRegistration from "./routes/Users/UserRegistration.jsx";
import {
  userRegistrationAction,
  userLoginAction,
} from "./routes/Users/actions.js";
import UserLogin from "./routes/Users/UserLogin.jsx";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users/register",
        element: <UserRegistration />,
        action: userRegistrationAction,
      },
      {
        path: "/users/login",
        element: <UserLogin />,
        action: userLoginAction,
      },
      {
        path: "/books",
        element: <BookList />,
        loader: async () => {
          return fetch("http://localhost:3000/api/books");
        },
      },
      {
        path: "/books/new",
        element: <BookForm />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <RouterProvider router={router} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
