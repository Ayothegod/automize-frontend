import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import Dashboard, {Loader as DashboardLoader} from "./routes/Dashboard.tsx";
import Register, {Loader as RegisterLoader} from "./routes/register.tsx";
import Login, {Loader as LoginLoader} from "./routes/login.tsx";
import Debt from "./routes/Debt.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: LoginLoader
  },
  {
    path: "/register",
    element: <Register />,
    loader: RegisterLoader
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: DashboardLoader
      },
      {
        path: "/debts/:id",
        element: <Debt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
);
