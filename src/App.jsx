import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Layout";
import Vision from "./pages/Vision";
import Livestreams from "./pages/Livestreams";
import Leaders from "./pages/Leaders";
import Beliefs from "./pages/Beliefs";

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
        path: "/sermons",
        element: <Livestreams />,
      },
      {
        path: "/leaders",
        element: <Leaders />,
      },
      {
        path: "/beliefs",
        element: <Beliefs />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
