import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddBlog from "../pages/Dashboard.js/Addblog";
import BlogList from "../pages/Dashboard.js/BlogList";
import UpdateBlog from "../pages/Dashboard.js/UpdateBlog";
import About from "../pages/Main/About";
import Cart from "../pages/Main/Cart";

import Home from "../pages/Main/Home";


const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            // {
            //     path: "top-rated",
            //     element: <TopRated />,
            // },
            {
                path: "cart",
                element: <Cart />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <BlogList />,
            },
            {
                path: "add-blog",
                element: <AddBlog />,
            },
            {
                path: "update-blog",
                element: <UpdateBlog />,
            },
        ],
    },
]);

export default routes;
