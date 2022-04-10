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
import StatisticsPage from 'statistics/pages/StatisticsPage';
import PrivateRoute from 'PrivateRoute';
import { useEffect } from 'react';
import { silentRefresh } from 'common/AuthUtil';

dotenv.config();

function App() {
  useEffect(() => {
    // silentRefresh();
    if(!window.location.href.endsWith('/login')) {
      silentRefresh();
    };
  });

  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/game/play' component={GamePage} />
        <PrivateRoute exact path='/game/rank' component={RankPage} />
        <PrivateRoute exact path='/department' component={DepartmentPage} />
        <PrivateRoute exact path='/search' component={SearchPage} />
        <PrivateRoute exact path='/statistics' component={StatisticsPage} />
      </Switch>
    </Router>
  );
}

export default App;
