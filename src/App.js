import { Routes, Route, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import NotFoundPage from "pages/NotFoundPage";

import routes from "routes.js";
import AdminLayout from "layouts/AdminLayout";
import CustomerLayout from "layouts/CustomerLayout";

toast.configure();

const App = () => {
  const location = useLocation();

  const isAdmin = location.pathname.includes("/admin");

  // Set layout by role
  let layout = isAdmin ? AdminLayout : CustomerLayout;

  return (
    <Routes>
      {routes.map((route) => {
        const NewElement = layout(route.element);

        return (
          <Route key={route.path} path={route.path} element={<NewElement />} />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
