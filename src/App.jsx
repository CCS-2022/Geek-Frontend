import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { index: true, element: <HomePage /> },
      // { path: "/about", element: <AboutPage /> },
      // { path: "/services", element: <ServicesPage /> },
      // { path: "/pricing", element: <PricingPage /> },
      // { path: "/sign-in", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
