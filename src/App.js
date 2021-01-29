import './App.css';
import Menu from './component/Menu'
import OrderHistoryPanel from './component/OrderHistoryPanel';
function App() {
  return (
    <div className="content grid-column">
      <Menu />
      <OrderHistoryPanel />
    </div>
  );
}

export default App;
