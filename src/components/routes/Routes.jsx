import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../pages/home/Home";
import AddProduct from "../pages/Product/AddProduct";
import Brand from "../pages/Product/BrandDetails/Brand";
import UpdateProduct from "../pages/Product/BrandDetails/UpdateProduct";
import DetailsProduct from "../pages/Product/BrandDetails/DetailsProduct";
import MyCart from "../pages/AddToCerd/MyCart";
import Login from "../pages/login_register/Login";
import SignUp from "../pages/login_register/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Error from "../pages/error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/product/:brand",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(
            `https://brabd-assignment-10-server.vercel.app/product/${params?.brand}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brabd-assignment-10-server.vercel.app/update/${params?.id}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <DetailsProduct></DetailsProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brabd-assignment-10-server.vercel.app/update/${params?.id}`
          ),
      },
      {
        path: `/addCart/:email`,
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brabd-assignment-10-server.vercel.app/addCart/${params?.email}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default routes;
