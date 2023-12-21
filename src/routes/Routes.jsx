import {
  Outlet,
  RouterProvider,
  Router,
  Route,
  RootRoute,
} from "@tanstack/react-router";
import Home from "../pages/home/Home";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Challenges from "../pages/dashboard/challenges/Challenges";
import Tasks from "../pages/dashboard/tasks/Tasks";
import Challenge from "../pages/dashboard/challenges/challenge/Challenge";
import Index from "../pages/dashboard/Index";
import NotFound from "../pages/dashboard/notFound/NotFound";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "dashboard",
  component: DashboardLayout,
});

const dashboardIndexRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: Index,
})

const challengesRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/challenges",
  component: Challenges,
});

const challengeRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/challenges/$challengeId",
  component: Challenge,
});

const tasksRoute = new Route({
  getParentRoute: () => dashboardRoute,
  path: "/tasks",
  component: Tasks,
});

const notFoundRoute = new Route({
  component: NotFound,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([
    dashboardIndexRoute,
    challengesRoute,
    challengeRoute,
    tasksRoute,
  ])
]);

const router = new Router({ routeTree });

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;