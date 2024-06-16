import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { GamePage } from "./pages/GamePage";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/gamePage',
            element: <GamePage />
        },
        {
            path: '/cart',
            element: <Cart />
        },
        ],
        errorElement: <NotFound />
    }
])