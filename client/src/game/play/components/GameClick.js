import React, {useEffect} from 'react';
import logo from 'images/devh.PNG';
import { ProgressBar } from 'react-bootstrap';
import './GameClick.css';

function GameClick({handleClick, percent}) {

  useEffect(() => {
    document.getElementById('coin-logo').style.opacity = percent;
    // if(percent % 1 == 0) {
    //   const canvas = document.getElementById('coin-logo');
    //   canvas.style.opacity = 1;
    //   const lineHeight = 40;
    //   canvas.width = 400;
    //   canvas.height = 200;
    //   const ctx = canvas.getContext('2d');
    //   ctx.font = lineHeight+'px sans-serif';
    //   const line = "Click !";
    //   ctx.fillText(line, 150, 110);
    // } else {
    //   document.getElementById('coin-logo').style.opacity = percent;
    // }
  }, [percent]);

  return (
    <>
      <ProgressBar className="game-percent" variant="success" now={percent*100} label={`${percent*100}%`} />
      <div className="div-click game game-click" onClick={handleClick}>
        <img id="coin-logo" src={logo} alt="DVH" />
        {/* {
          percent % 1 == 0 ?
          <canvas id="coin-logo" className="t-text game"></canvas> :
          <img id="coin-logo" src={logo} alt="DVH" />
        } */}
      </div>
    </>
  );
}

export default GameClick;