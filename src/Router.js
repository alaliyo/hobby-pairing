import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import LogIn from './pages/LogIn';
import My from './pages/My';
import Gatherings from './pages/Gatherings';
import Talents from './pages/Talents';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/mypage",
                element: <My />
            },
            {
                path: "/gatherings",
                element: <Gatherings />
            },
            {
                path: "/talents",
                element: <Talents />
            },
        ],
        errorElement: <NotFound />
    }
])

export default router;