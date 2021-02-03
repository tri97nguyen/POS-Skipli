import './App.css';

import Login from './component/Login'
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom'
import UserProvider from './providers/User'
import TableProvider from './providers/Table'
import Dashboard from './component/Dashboard';

export default function App() {
  return (

    <TableProvider>
      <UserProvider>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/login" />
      </UserProvider>

    </TableProvider>





  );
}
