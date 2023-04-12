import './App.css';
import Main from "./Components/Main.js"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
// import Pc from "./Components/Pc"
import Test from "./Components/Test"
import Select from "./Components/Select"
import Home from "./Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Result } from './Components/Result';
function App() {
  const user = localStorage.getItem('token');
  return (
    <div className="App">
      {/* <Router>
      <Switch>
          <Route exact path="/"> <Pc/></Route>
          <Route exact path="/signup">  <Signup/> </Route>
          <Route exact path="/editprofile">  <Pc/> </Route>
          <Route exact path="/signin"> <Signin/> </Route>
          <Route exact path="/done"> <Done/> </Route>
          <Route exact path="/main"> <Main/> </Route>
          <Route exact path="/" element={<Link to="/signin"/>}/>
      </Switch>
      </Router> */}

      <Router>
      <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/signup">  <Signup/> </Route>
          <Route exact path="/signin"> <Signin/> </Route>
          <Route exact path="/test"> <Test/> </Route>
          <Route exact path="/select"> <Select/> </Route>
          <Route exact path="/profile"> <Main/> </Route>
          <Route exact path="/result"> <Result/> </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;