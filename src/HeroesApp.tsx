import { RouterProvider } from "react-router";
import { appRouter } from "./router/App.router";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
