import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import NewPassword from "../pages/NewPassword"
import RecoveryPassword from "../pages/RecoveryPassword";
import Login from "../pages/Login";
import Signin from "../pages/Signin";
import EditAccount from "../pages/EditAccount";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import UserOrder from "../pages/UserOrder";
import Orders from "../pages/Orders";
import Toggles from "../pages/Toggles";
import Asides from "../pages/Asides";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new-password" element={<NewPassword />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/edit-account" element={<EditAccount />} />
          <Route exact path="/user-order" element={<UserOrder />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route
            exact
            path="/recovery-password"
            element={<RecoveryPassword />}
          />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="/toggles" element={<Toggles />} />
          <Route exact path="/asides" element={<Asides />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
