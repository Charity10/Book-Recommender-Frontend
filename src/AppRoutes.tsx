import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

function AppRoutes() {
  return (
    <Routes>
      {["/", "/home"].map((path) => (
        <Route key={path} path={path} element={<Home />} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
