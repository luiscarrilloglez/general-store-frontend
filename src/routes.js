import HomePage from "pages/HomePage";
import CollectionPage from "pages/CollectionPage";
//import CheckoutPage from "pages/CheckoutPage";

const routes = [
  // Routes for customer
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/collections",
    element: CollectionPage,
  },

  // Routes for admin
  {
    path: "/admin/",
    element: HomePage,
  },
  {
    path: "/admin/collections",
    element: CollectionPage,
  },
];

export default routes;
