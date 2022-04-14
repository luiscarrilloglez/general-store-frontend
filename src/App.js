import { Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import CategoriesLayout from "layouts/CategoriesLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";

import routes from "routes.js";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const isAdmin = useIsAdmin();

  return (
    <Switch>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact
            component={CategoriesLayout(route.component, isAdmin)}
          />
        );
      })}
      <Route component={CategoriesLayout(NotFoundPage, isAdmin)} />
      <ToastContainer />
    </Switch>
  );
}

export default App;
