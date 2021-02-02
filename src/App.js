import './App.css';

import Login from './component/Login'
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect } from 'react-router-dom'
import UserContext from './providers/User'
import Dashboard from './component/Dashboard';

export default function App() {
  return (


    <UserContext>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Redirect from="*" to="/login" />
    </UserContext>





  );
}
