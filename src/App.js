import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import HomePage from "./Component/HomePage/HomePage";
import Login from "./Component/Login/Login";
import OrderPage from "./Component/ClientSite/OrderPage/OrderPage";
import ReviewPage from "./Component/ClientSite/ReviewPage/ReviewPage";
import OrderListPage from "./Component/ClientSite/OrderListPage/OrderListPage";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Admin from "./Component/AdminSite/AdminPage/Admin";
import MakeAdmin from "./Component/AdminSite/MakeAdmin/MakeAdmin";
import AddService from "./Component/AdminSite/AddService/AddService";

export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isLogIn: false,
    displayName: "",
    photo: "",
    email: "",
  }); //------- global logged in user

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/order">
            <OrderPage></OrderPage>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>

          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/review">
            <ReviewPage></ReviewPage>
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            <OrderListPage></OrderListPage>
          </PrivateRoute>

          <Route path="*">
            <h1>Page Not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
