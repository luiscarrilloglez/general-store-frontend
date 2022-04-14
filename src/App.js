import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import CategoriesLayout from "layouts/CategoriesLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";
import { CheckoutProvider } from "contexts/CheckoutContext";

import routes from "routes.js";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const isAdmin = useIsAdmin();

  const checkoutFromStorage = JSON.parse(localStorage.getItem("r17-checkout"));
  const [checkoutContext, setCheckoutContext] = useState(
    checkoutFromStorage ?? []
  );

  const propsToLayout = { checkoutContext, isAdmin };

  return (
    <CheckoutProvider value={[checkoutContext, setCheckoutContext]}>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={CategoriesLayout(route.component, propsToLayout)}
            />
          );
        })}
        <Route component={CategoriesLayout(NotFoundPage, propsToLayout)} />
        <ToastContainer />
      </Switch>
    </CheckoutProvider>
  );
}

export default App;
