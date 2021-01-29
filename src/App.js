import './App.css';
import Menu from './component/Menu'
import OrderHistoryPanel from './component/OrderHistoryPanel';
import Login from './component/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/dashboard">
        <div className="content grid-column">
          <Menu />
          <OrderHistoryPanel />
        </div>
      </Route>
      <Route path="/login">
        <Login />
      </Route>

    </Router>

  );
}

export default App;
