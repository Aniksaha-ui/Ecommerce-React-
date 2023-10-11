import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

export const publicRoute = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/login", name: "Login", Component: Login },
];
