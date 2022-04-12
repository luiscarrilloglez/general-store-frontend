import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import AdminLayout from "layouts/AdminLayout";
import CustomerLayout from "layouts/CustomerLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";

import routes from "routes.js";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const App = () => {
  const isAdmin = useIsAdmin();

  // Set layout by role
  let layout = isAdmin ? AdminLayout : CustomerLayout;

  return (
    <Routes>
      {routes.map((route) => {
        const Element = layout(route.element, ToastContainer);

        return (
          <Route key={route.path} path={route.path} element={<Element />} />
        );
      })}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
