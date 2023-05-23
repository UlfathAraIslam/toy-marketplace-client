import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/registration";
import Toys from "../pages/Toys/Toys";
import Toy from "../pages/Toy/Toy";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToy from "../pages/MyToy/MyToy";

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
            path: '/my-toys',
            element: <MyToy></MyToy>
        },
        {
            path: '/toy/:id',
            element: <Toy></Toy>,
            // loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>,
        },
        {
            path: '/add-toy/:id',
            element: <AddAToy></AddAToy>,
            // loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        },
    ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
  ]);

  export default router;