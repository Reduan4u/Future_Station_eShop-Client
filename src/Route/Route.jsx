import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import Brands from "../Components/Brands/Brands";
import AddProducts from "../Components/AddProducts/AddProducts";
import Cart from "../Components/Cart/Cart";
import AboutUs from "../Components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      },
      {
        path: '/addProducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
    ]
  },
]);
export default router;