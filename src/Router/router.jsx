import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[{
        path: "/about",
      element: <div>test</div>,
      }]
    },
    {
      path: "/test",
      element: <div>test</div>,
    },
  ]);

export default router;