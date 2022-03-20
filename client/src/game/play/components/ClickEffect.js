import React, { useEffect } from 'react';
import './ClickEffect.css';

function ClickEffect({x, y, count}) {

  const handleAnimationEnd = (e) => {
    e.target.classList.remove('game-click-effect');
    e.target.style.display = 'none';
  }

  useEffect(() => {
    const el = document.getElementById('game-click-effect');
    el.style.display = 'inline-block';
    el.classList.add('game-click-effect');
  });
  return (
    <>
      <div className="click-effect-wrap">
        <div onAnimationEnd={handleAnimationEnd} style={{display:'none', position:'absolute', left:`${x}px`, top:`${y}px`}} id='game-click-effect' className='t-text game-click-effect'></div>
      </div>
    </>
  );
}

export default ClickEffect;