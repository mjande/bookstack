import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout.jsx";
import Home from "./pages/Home";
import BookList from "./pages/BookList/BookList.jsx";

import "./App.css";
import theme from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <BookList />,
        loader: async () => {
          const response = await fetch("http://localhost:3000/api/books");
          console.log(response);
          return response;
        },
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
