import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import LogIn from './pages/LogIn';
import My from './pages/My';
import Gatherings from './pages/Gatherings';
import Talents from './pages/Talents';
import MyProfile from "./components/My/MyProfile";
import MyGatherings from "./components/My/MyGatherings";
import MyTalents from "./components/My/MyTalents";
import MyPosts from "./components/My/MyPosts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "mypage/:userId",
                element: <My />,
                children: [
                    {
                        path: "profile",
                        element: <MyProfile />,
                    },
                    {
                        path: "gatherings",
                        element: <MyGatherings />,
                    },
                    {
                        path: "talents",
                        element: <MyTalents />,
                    },
                    {
                        path: "myposts",
                        element: <MyPosts />,
                    },
                ],
            },
            {
                path: "gatherings",
                element: <Gatherings />,
            },
            {
                path: "talents",
                element: <Talents />,
            },
        ],
        errorElement: <NotFound />
    }
]);

export default router;