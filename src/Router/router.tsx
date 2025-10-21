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

        ]







    },
])
