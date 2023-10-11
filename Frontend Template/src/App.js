import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/publicRoutes";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PrivateRoute from "./authentication/PrivateRoute";
import { privateRoutes } from "./routes/privateRoutes";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Services from "./pages/Services";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Navbar>
      {/* <Routes>
        {publicRoute.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        <Route element={<PrivateRoute />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<AdminRoute />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='add-admin' element={<AddAdmin />} />
            <Route path='add-service' element={<AddService />} />
          </Route>
        </Route>
      </Routes> */}

      {/* Same as above but in a break down manners */}

      <Routes>
        {/* PublicRoutes */}

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Private Routes  */}

        <Route element={<PrivateRoute />}>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          {/* root/dashboard/add-admin */}
          <Route path="add-admin" element={<AddAdmin />} />
          {/* root/dashboard/add-service */}
          <Route path="add-service" element={<AddService />} />
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
