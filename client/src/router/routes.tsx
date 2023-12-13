import Home from "../pages/index";
import Crash from "../pages/crash/index";

export const routes = [
  { path: "", name: "home", component: <Home /> },
  { path: "/crash", name: "crash", component: <Crash /> },
];
