import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Layout from "./components/layout/Layout";
import Vision from "./pages/Vision";
import Livestreams from "./pages/Livestreams";

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
        path: "/vision",
        element: <Vision />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Sermons />,
      },
      {
        path: "/livestreams",
        element: <Livestreams />,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
