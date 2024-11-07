import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Sermons from "./pages/Sermons";
import Testimonials from "./components/Testimonials";

// Will be modified as we add more pages
const routes = createBrowserRouter([
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
  {
    path: "/testimonials",
    element: <Testimonials />,
  }
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
