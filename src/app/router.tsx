import { createBrowserRouter } from "react-router-dom";

import { routerPaths } from "./routerPaths";
import MainLayout from "@/layout/MainLayout";
import { Career, History, Home, NotFound, Projects,Partners, Contacts, Media, MediaDetail } from "@/pages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routerPaths.history,
        element: <History />,
      },
      {
        path: routerPaths.projects,
        element: <Projects />,
      },
      {
        path: routerPaths.career,
        element: <Career />,
      },
      {
        path: routerPaths.partners,
        element: <Partners />,
      },
      {
        path: routerPaths.contacts,
        element: <Contacts />,
      },
      {
        path: routerPaths.media,
        element: <Media />,
      },
      {
        path: routerPaths.mediaDetail,
        element: <MediaDetail/>,
      },
    ],
  },
  {
    path: routerPaths.notFound,
    element: <NotFound />,
  },
]);