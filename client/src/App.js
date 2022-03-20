import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/theme-common.css';
import 'css/theme-dark.css';
import Home from "Home";
import dotenv from 'dotenv';
import GamePage from 'game/play/pages/GamePlayPage';
import RankPage from 'game/rank/pages/GameRankPage';

dotenv.config();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/game/play' component={GamePage} />
        <Route exact path='/game/rank' component={RankPage} />
      </Switch>
    </Router>
  );
}

export default App;
