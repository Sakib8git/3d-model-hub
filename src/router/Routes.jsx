import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import Profile from "../Pages/Profile";
import AllModels from "../Pages/AllModels/AllModels";
import AddModels from "../Pages/AddModels/AddModels";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel/UpdateModel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Main,
    children: [
      {
        index: true,
        loader: () => fetch(`http://localhost:3000/latest-models`),
        Component: Home,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/all-models",
        loader: () => fetch("http://localhost:3000/models"),
        Component: AllModels,
      },
      {
        path: "/add-model",
        Component: AddModels,
      },
      {
        path: "/update-model/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
        Component: UpdateModel,
      },
      {
        path: "/model-details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
        Component: ModelDetails,
      },
    ],
  },
]);
