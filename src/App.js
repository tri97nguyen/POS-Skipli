import "./App.css";

import Login from "./component/Login";
import { Route, Redirect } from "react-router-dom";
import UserProvider from "./providers/User";
import TableProvider from "./providers/Table";
import Dashboard from "./component/Dashboard";
import DishProvider from "./providers/Dishes";

export default function App() {
  return (
    <DishProvider>
      <TableProvider>
        <UserProvider>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          {/* <Redirect from="*" to="/login" /> */}
        </UserProvider>
      </TableProvider>
    </DishProvider>
  );
}
