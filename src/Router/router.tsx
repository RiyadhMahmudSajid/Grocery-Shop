import CategoryFood from "@/components/MyComponent/Layout/CategoryFood";
import HomeLayout from "@/components/MyComponent/Layout/HomeLayout";
import SingleDetail from "@/components/MyComponent/Layout/SingleDetail";

import Home from "@/components/MyComponent/Page/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            { index: true, Component: Home },
            {
                path: "detail/:id", // nested route under HomeLayout
                Component: SingleDetail,
            },
            {
                path: "cat/:id",
              
                Component: CategoryFood
            }

        ]
        //  loader: async ({ params}) =>{
        //                     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        //                      return res.json();
        //                 },






    },
])
