import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Root/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import LogIn from "../Components/LogIn/LogIn";
import Brands from "../Components/Brands/Brands";
import AddProducts from "../Components/AddProducts/AddProducts";
import Cart from "../Components/Cart/Cart";
import AboutUs from "../Components/AboutUs/AboutUs";
import SignUp from "../Components/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AvailableBrands from "../Components/Home/AvailableBrands/AvailableBrands.jsx/AvailableBrands";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("/brands.json")

      },
      {
        path: '/brands/:brandName',
        element: <PrivateRoute><Brands></Brands></PrivateRoute>,
        loader: () => fetch("https://future-station-server.vercel.app/product")
      },
      {
        path: '/addProducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/brands',
        element: <AvailableBrands></AvailableBrands>
      },
      {
        path: '/logIn',
        element: <LogIn></LogIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },


    ]
  },
]);
export default router;