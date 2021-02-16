
import { Switch, Route } from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage"; 
import ShopPage from './pages/shop/ShopPage';
import "./App.css";
 
function App() {
  return (
    <Switch>
    <Route exact path='/' component={HomePage} /> 
    <Route  path='/shop' component={ShopPage} /> 
    </Switch> 
  );
}

export default App;
