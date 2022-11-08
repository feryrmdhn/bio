import { RouteProps } from "../types";
import About from "../pages/About";
import Home from "../pages/Home";
import Work from "../pages/Work";
import JobDetail from "../pages/JobDetail";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";
import JobsCollect from "../pages/JobsCollect";

export const userRoutes: Array<RouteProps> = [
    { path: "/", component: <Home /> },
    { path: "/about", exact: true, component: <About /> },
    { path: "/work", exact: true, component: <Work /> },
    { path: "/work/:slug", exact: true, component: <JobDetail /> },
    { path: "/blog", exact: true, component: <Blog /> },
    { path: "/work/category/:slug", exact: true, component: <JobsCollect /> },
    { path: "*", component: <NotFound /> },
]
