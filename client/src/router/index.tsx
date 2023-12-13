import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function Router({
  defaultLayout = undefined,
}: {
  defaultLayout: JSX.Element | undefined;
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={defaultLayout}>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.path}
                element={route.component}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
