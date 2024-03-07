import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutUs from "./AboutUs/AboutUs";
import HomePage from "./HomePage/HomePage";
import ContactUs from "./ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Errorfile />,
  },

  {
    path:"/About",
    element:<AboutUs/>
  },

  {
    path:"/Home",
    element:<HomePage/>
  },

  {
    path:"/ContactUs",
    element:<ContactUs/>
  }
]);

export default router;
