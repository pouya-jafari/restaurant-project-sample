import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import "./bootstrap.min.css";
import Menu from "./pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <HomePage /> },
      { path: "/menu", element: <Menu /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
