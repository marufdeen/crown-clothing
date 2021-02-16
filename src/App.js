import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from 'react-router-dom';
import "./App.css";


function Hatpage() {
  return (
    <div>
    <h1>Hatpage</h1>
    </div>
  );
}
function App() {
  return (
    <Switch>
    <Route exact path='/' component={HomePage} /> 
    <Route  path='/shop/hats' component={Hatpage} /> 
    </Switch> 
  );
}

export default App;
