import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../pages/home/Home";
import AddProduct from "../pages/Product/AddProduct";
import Brand from "../pages/Product/BrandDetails/Brand";
import UpdateProduct from "../pages/Product/BrandDetails/UpdateProduct";
import DetailsProduct from "../pages/Product/BrandDetails/DetailsProduct";
import MyCart from "../pages/AddToCerd/MyCart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/product/:brand",
        element: <Brand></Brand>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params?.brand}`),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params?.id}`),
      },
      {
        path: "/details/:id",
        element: <DetailsProduct></DetailsProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params?.id}`),
      },
      {
        path: "/addCart/suktuhin@gmail.com",
        element: <MyCart></MyCart>,
        loader: () => fetch(`http://localhost:5000/addCart/suktuhin@gmail.com`),
      },
    ],
  },
]);

export default routes;
