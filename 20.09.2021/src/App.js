import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Service from './components/services'
import Service1 from './components/service1';
import Service2 from './components/service2';

function App() {
  return (
      <Router>
        <Switch>
          <Route path= '/'exact>
            <Home />
          </Route>
          <Route path = '/about'>
            <About />
          </Route>
          <Route path = '/services'>
            <Service />
          </Route>
          <Route path = '/services1'>
            <Service1 />
          </Route>
          <Route path = '/services2'>
            <Service2 />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
