import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/registration";
import Toys from "../pages/Toys/Toys";
import Toy from "../pages/Toy/Toy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Registration></Registration>
        },
        {
            path: '/toys',
            element: <Toys></Toys>
        },
        {
            path: '/toy',
            element: <Toy></Toy>
        },

      ]
    },
  ]);

  export default router;