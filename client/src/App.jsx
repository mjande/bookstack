import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./layout/Root";

import Home from "./pages/Home";
import Books from "./pages/Books";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
