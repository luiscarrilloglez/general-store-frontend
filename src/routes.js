import HomePage from "pages/HomePage";

const routes = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/steaks",
    element: HomePage,
  },
  {
    path: "/black-brangus",
    element: HomePage,
  },
  {
    path: "/dried-meat",
    element: HomePage,
  },
  {
    path: "/accessories",
    element: HomePage,
  },

  // Routes for admin
  {
    path: "/admin/",
    element: HomePage,
  },
  {
    path: "/admin/steaks",
    element: HomePage,
  },
  {
    path: "/admin/black-brangus",
    element: HomePage,
  },
  {
    path: "/admin/dried-meat",
    element: HomePage,
  },
  {
    path: "/admin/accessories",
    element: HomePage,
  },
];

export default routes;
