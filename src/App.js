import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "layouts/MainLayout";
import NotFoundPage from "pages/NotFoundPage";
import { useIsAdmin } from "hooks/useQuery";
import { ShoppingCartProvider } from "contexts/ShoppingCartContext";

import routes from "routes.js";
import { getShoppingCartLocalStorage } from "utils";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAdmin = useIsAdmin();

  const [shoppingCartContext, setShoppingCartContext] = useState(
    getShoppingCartLocalStorage() ?? []
  );

  const propsToLayout = { shoppingCartContext, isAdmin };
  const NotFoundComp = MainLayout(NotFoundPage, propsToLayout);

  return (
    <ShoppingCartProvider value={[shoppingCartContext, setShoppingCartContext]}>
      <Routes>
        {routes.map((route) => {
          const LayoutComp = MainLayout(route.component, propsToLayout);
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<LayoutComp />}
            />
          );
        })}
        <Route path="*" element={<NotFoundComp />} />
      </Routes>
      <ToastContainer />
    </ShoppingCartProvider>
  );
}

export default App;
