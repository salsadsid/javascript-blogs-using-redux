import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";

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
            // {
            //     path: "cart",
            //     element: <Cart />,
            // },
        ],
    },
    // {
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //     children: [
    //         {
    //             path: "/dashboard",
    //             element: <ProductList />,
    //         },
    //         {
    //             path: "add-product",
    //             element: <AddProduct />,
    //         },
    //     ],
    // },
]);

export default routes;
