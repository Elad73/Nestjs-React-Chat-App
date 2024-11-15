import { createBrowserRouter } from "react-router-dom";
import Auth from "./auth/Auth";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Auth />,
    },
]);

export default router;