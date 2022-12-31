import { createBrowserRouter } from "react-router-dom";
import AddPost from "./pages/AddPost";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddPost />,
        action: AddPost.action,
      },
      {
        path: "/edit/:postId",
        element: <Edit />,
        action: Edit.action,
        loader: Edit.loader,
      },

      {
        path: "/edit/:postId/destroy",
        action: Delete.action,
      },
    ],
  },
]);

export default router;
