import { createBrowserRouter } from "react-router";
import { HomePage } from "../heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
// import { SearchPage } from "@/heroes/search/SearchPage";
import { AdminPages } from "@/admin/pages/AdminPages";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/pages/layout/AdminLayout";
import { lazy } from "react";

const SearchPage = lazy(() => import("@/heroes/search/SearchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/heroes/1",
        element: <HeroPage />,
      },

      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />,
      },
    ],
  },
]);
