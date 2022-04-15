import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import MainLayout from "layouts/MainLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";
import { ShoppingCartProvider } from "contexts/ShoppingCartContext";

import routes from "routes.js";
import { getShoppingCartLocalStorage } from "utils";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const isAdmin = useIsAdmin();

  const [shoppingCartContext, setShoppingCartContext] = useState(
    getShoppingCartLocalStorage() ?? []
  );

  const propsToLayout = { shoppingCartContext, isAdmin };

  return (
    <ShoppingCartProvider value={[shoppingCartContext, setShoppingCartContext]}>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={MainLayout(route.component, propsToLayout)}
            />
          );
        })}
        <Route component={MainLayout(NotFoundPage, propsToLayout)} />
        <ToastContainer />
      </Switch>
    </ShoppingCartProvider>
  );
}

export default App;
