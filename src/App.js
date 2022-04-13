import { Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import AdminLayout from "layouts/AdminLayout";
import CustomerLayout from "layouts/CustomerLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";

import routes from "routes.js";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const isAdmin = useIsAdmin();

  // Set layout by role
  let layout = isAdmin ? AdminLayout : CustomerLayout;

  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={layout(route.component)}
          />
        );
      })}
      <Route path="*" component={layout(NotFoundPage)} />
      <ToastContainer />
    </Switch>
  );
}

export default App;
