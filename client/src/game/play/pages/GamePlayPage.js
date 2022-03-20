import React from 'react';
import Layout from 'layout/Layout';
import './GamePlayPage.css';
import { useEffect } from 'react';
import { useState } from 'react';
import GameUpgradeStore from 'game/play/components/GameUpgradeStore';
import GameClick from 'game/play/components/GameClick';
import GameSummary from 'game/play/components/GameSummary';

function GamePage() {
  
  const [clickCount, setClickCount] = useState(0);
  const [totalCoin, setTotalCoin] = useState(0);
  const [percent, setPercent] = useState(0);
  const [log, setLog] = useState('게임 시작 !');
  const [countPerClick, setCountPerClick] = useState(1); // 한번의 클릭당 오르는 횟수
  // const [clickWeight, setClickWeight] = useState(1); // 클릭 배수
  // const [clickBonus, setClickBonus] = useState(0); // 클릭 추가 횟수
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const handleUpgrade = () => {
  //   setClickWeight(1);
  //   setClickBonus(0);
  //   const newCountPerClick = (countPerClick + clickBonus) * clickWeight;
  //   setCountPerClick(newCountPerClick);
  // }

  const clickEffect = (e) => {
    const effectDiv = document.createElement("div");
    effectDiv.className = 'game-click-effect';
    effectDiv.style.left = e.clientX+'px';
    effectDiv.style.top = e.clientY+'px';

    // const effectDivR = document.createElement("div");
    // effectDivR.className = 'game-click-effect';
    // effectDivR.style.left = (e.clientX+20)+'px';
    // effectDivR.style.top = e.clientY+'px';

    // const effectDivL = document.createElement("div");
    // effectDivL.className = 'game-click-effect';
    // effectDivL.style.left = (e.clientX-20)+'px';
    // effectDivL.style.top = e.clientY+'px';

    document.body.appendChild(effectDiv);
    // document.body.appendChild(effectDivR);
    // document.body.appendChild(effectDivL);
    
    effectDiv.addEventListener('animationend', () => {
      effectDiv.parentElement.removeChild(effectDiv);
    });

    // effectDivR.addEventListener('animationend', () => {
    //   effectDivR.parentElement.removeChild(effectDivR);
    // });

    // effectDivL.addEventListener('animationend', () => {
    //   effectDivL.parentElement.removeChild(effectDivL);
    // });
  }

  const handleClick = (e) => {
    clickEffect(e);
    // const newClickCount = clickCount + countPerClick;
    const newClickCount = clickCount + countPerClick;
    setClickCount(newClickCount);

    const newTotalCoin = (newClickCount/10);
    const currentCoinInteger = newTotalCoin.toString().split('.')[0];
    if(currentCoinInteger > totalCoin)
      setTotalCoin(newTotalCoin);
    // if(newClickCount % 10 === 0) {
    //   setTotalCoin(newTotalCoin);
    // }  
    const decimalPlaces = newTotalCoin.toFixed(2).toString().split('.')[1].length;
    let newPercent = newTotalCoin - Math.floor(newTotalCoin);
    newPercent = newPercent.toFixed(decimalPlaces);
    setPercent(newPercent);
  }
  
  useEffect(() => {
    console.log('page');
  }, [totalCoin]);

  return (
    <>
      <Layout>
        {/* <ClickEffect x={x} y={y} count={countPerClick} /> */}
        <div className='game-container'>
          <div className='t-text game game-wrap'>
            <GameSummary totalCoin={totalCoin} />
            <div className='game game-body'>
              <div className='game game-body-main'>
                <GameClick handleClick={handleClick} percent={percent} />
              </div>
              <div className='game-body-upgrade'>
                <GameUpgradeStore totalCoin={totalCoin} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
  
export default GamePage;