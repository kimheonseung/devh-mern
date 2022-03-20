import React, { useEffect } from 'react';

function GameLog({log}) {
  

  useEffect(() => {
    const logEl = document.getElementById('game-log');
    logEl.scrollTop = logEl.scrollHeight;
  }, [log])

  return (
    <>
      <textarea id='game-log' readOnly={true} disabled={true} draggable={false} value={log} className='game game-log' />
    </>
  );
}

export default GameLog;