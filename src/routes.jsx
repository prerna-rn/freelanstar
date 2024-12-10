import { createBrowserRouter, Outlet } from "react-router-dom";
import { Footer, Navbar } from "@/components";
import {
  Home,
  Gigs,
  Gig,
  Login,
  Register,
  Add,
  Orders,
  Messages,
  Message,
  MyGigs,
  SearchResults, // Import SearchResults correctly
} from "@/pages";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/myGigs",
        element: <MyGigs />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/search",
        element: <SearchResults />, // Ensure this is correctly added
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Home />, // Fallback route for unmatched paths
  },
]);
