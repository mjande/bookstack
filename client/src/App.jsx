import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import MainLayout from "./layout/MainLayout/MainLayout.jsx";
import Home from "./routes/Home.jsx";
import Books from "./routes/Books/Books.jsx";

import "./App.css";
import theme from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import BookForm from "./routes/Books/BookForm.jsx";
import UserForm from "./routes/Users/UserForm.jsx";
import * as userActions from "./routes/Users/actions.js";
import * as bookLoaders from "./routes/Books/loaders.js";
import { createContext, useState } from "react";

// AuthContext stores the username for the current user (used for data fetching)
export const AuthContext = createContext(null);

function App() {
  // Create state for currentUser
  const [currentUser, setCurrentUser] = useState(null);

  // Create router
  const router = createBrowserRouter([
    {
      element: <MainLayout setCurrentUser={setCurrentUser} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users/register",
          element: <UserForm action="register" />,
          action: userActions.register,
        },
        {
          path: "/users/login",
          element: <UserForm action="login" />,
          action: userActions.login(setCurrentUser),
        },
        {
          path: "/users/edit",
          element: <UserForm action="edit" />,
          action: userActions.edit,
        },
        {
          path: "/books",
          element: <Books />,
          loader: bookLoaders.getAll(),
        },
        {
          path: "/books/new",
          element: <BookForm />,
        },
      ],
    },
  ]);

  // AuthContext provides the current user to components
  // ThemeProvider provides the theming values
  // LocalizationProvider provides a date adapter used by Date Picker component
  // from Material UI
  // Router Providers makes all routes declared above available
  return (
    <AuthContext.Provider value={currentUser}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
