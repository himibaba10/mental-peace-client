import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Sessions from "../pages/Sessions";
import About from "../pages/About";
import ClientExperiences from "../pages/ClientExperiences";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Auth from "../Layout/Auth";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Doctors from "../pages/Doctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sessions",
        element: <Sessions />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "client-experiences",
        element: <ClientExperiences />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
