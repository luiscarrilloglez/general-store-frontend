import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

import AdminLayout from "layouts/AdminLayout";
import CustomerLayout from "layouts/CustomerLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";

import routes from "routes.js";

toast.configure();

const App = () => {
  const isAdmin = useIsAdmin();

  // Set layout by role
  let layout = isAdmin ? AdminLayout : CustomerLayout;

  return (
    <Routes>
      {routes.map((route) => {
        const Element = layout(route.element);

        return (
          <Route key={route.path} path={route.path} element={<Element />} />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
