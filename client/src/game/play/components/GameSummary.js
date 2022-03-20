import { faShoppingCart, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './GameSummary.css';

function GameSummary({/*achievement, clickCount, */totalCoin/*, handleShopModal*/}) {
  
  const handleAnimationEnd = (e) => {
    e.target.classList.remove('game-scale-inc');
  }

  const handleSave = () => {
    console.log('saved');
  }

  useEffect(() => {
    if(totalCoin > 0)
      document.getElementById('game-level').classList.add('game-scale-inc');
    
  }, [totalCoin])

  return (
    <>
      <div className='game-summary'>
        <div onAnimationEnd={handleAnimationEnd} id='game-level'>채굴: {totalCoin} DVH</div>
        <FontAwesomeIcon onClick={handleSave} icon={faSave} />
      </div>
    </>
  );
}

export default GameSummary;