const routes = [
  {
    path: "/vue-basics",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/vue-basics/Index.vue") },
      { path: "/tasks", component: () => import("pages/vue-basics/Tasks.vue") }
    ]
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
