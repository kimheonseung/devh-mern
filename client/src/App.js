import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/theme-common.css';
import 'css/theme-dark.css';
// import 'css/reset.css';
import Home from "Home";
import dotenv from 'dotenv';
import GamePage from 'game/play/pages/GamePlayPage';
import RankPage from 'game/rank/pages/GameRankPage';
import LoginPage from 'login/pages/LoginPage';
import DepartmentPage from 'department/pages/DepartmentPage';
import SearchPage from 'search/pages/SearchPage';
import PrivateRoute from 'PrivateRoute';

dotenv.config();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/game/play' component={GamePage} />
        <PrivateRoute exact path='/game/rank' component={RankPage} />
        <PrivateRoute exact path='/department' component={DepartmentPage} />
        <PrivateRoute exact path='/search' component={SearchPage} />
      </Switch>
    </Router>
  );
}

export default App;
