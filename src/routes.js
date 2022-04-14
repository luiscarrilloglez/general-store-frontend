import HomePage from "pages/HomePage";
import CollectionPage from "pages/CollectionPage";
import CheckoutPage from "pages/CheckoutPage";

const routes = [
  // Routes for customer
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/collections",
    component: CollectionPage,
  },
  {
    path: "/checkout",
    component: CheckoutPage,
  },

  // Routes for admin
  {
    path: "/admin/",
    component: HomePage,
  },
  {
    path: "/admin/collections",
    component: CollectionPage,
  },
];

export default routes;
