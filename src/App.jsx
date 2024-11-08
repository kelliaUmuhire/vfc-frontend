import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Layout from "./components/layout/Layout";

// Will be modified as we add more pages
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Sermons />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
