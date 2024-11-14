import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { loader as homeLoader } from "./pages/Home";
import { loader as ProductsLoader } from "./pages/Products";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
          loader: homeLoader
        },
        {
          path: "/products/:id",
          element: <Products/>,
          loader: ProductsLoader
        },
        {
          path: "/cart",
          element: <Cart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
