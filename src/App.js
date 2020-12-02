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

          <Route path="/order">
            <OrderPage></OrderPage>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>

          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>

          <Route path="/addService">
            <AddService></AddService>
          </Route>

          <Route path="/review">
            <ReviewPage></ReviewPage>
          </Route>

          <Route path="/orderList">
            <OrderListPage></OrderListPage>
          </Route>

          <Route path="*">
            <h1>Page Not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
