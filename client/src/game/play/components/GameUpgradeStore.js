import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Grid from '@toast-ui/react-grid';
import TuiGrid from 'tui-grid';
import 'tui-grid/dist/tui-grid.css';
import './GameUpgradeStore.css';
import { toInteger } from 'lodash';

function GameUpgradeStore({totalCoin}) {

  const [powerLevel, setPowerLevel] = useState(1);
  const [cpuLevel, setCpuLevel] = useState(1);
  const [gpuLevel, setGpuLevel] = useState(1);

  const powerUpgradeTable = [
    0, 5, 10, 20, 40, 80, 200, 500, 1000, 2000
    // 0, 1, 2, 3, 40, 80, 200, 500, 1000, 2000
  ];

  const cpuUpgradeTable = [
    0, 40, 100, 300, 800, 2000, 5000, 10000, 20000, 50000
  ];

  const gpuUpgradeTable = [
    0, 100, 200, 1000, 2500, 6000, 15000, 50000, 100000, 1000000
  ];

  class CustomUpgradeRenderer {
    constructor(props) {
      const rowKey = props.rowKey;
      const el = document.createElement('button');

      el.className = "btn btn-secondary t-btn-toggle btn-upgrade";

      switch (rowKey) {
        case 0:
          const newPowerLevel = powerLevel + 1;
          const nextPowerCost = powerUpgradeTable[newPowerLevel];
          if(totalCoin < nextPowerCost) 
            el.setAttribute('disabled', true);
          el.innerHTML = `${nextPowerCost} DVH`;
          el.dataset.id = 1;
          break;
        case 1:
          const newCpuLevel = cpuLevel + 1;
          const nextCpuCost = cpuUpgradeTable[newCpuLevel];
          if(totalCoin < nextCpuCost) 
            el.setAttribute('disabled', true);
          el.innerHTML = `${nextCpuCost} DVH`;
          el.dataset.id = 2;
          break;
        case 2:
          const newGpuLevel = gpuLevel + 1;
          const nextGpuCost = gpuUpgradeTable[newGpuLevel];
          if(totalCoin < nextGpuCost) 
            el.setAttribute('disabled', true);
          el.innerHTML = `${nextGpuCost} DVH`;
          el.dataset.id = 3;
          break;
        default:
          break;
      }

      el.addEventListener('click', handleUpgradeClick);

      this.el = el;
      // this.render(props);
    }

    getElement() {
      return this.el;
    }

    // render(props) {
      
    // }
  }

  

  const gridRef = useRef();

  TuiGrid.applyTheme('default', {
    row: {
      odd: {
        background: '#363636',
        text: '#aaa',
      },
      even: {
          background: '#2f2f2f',
          text: '#aaa',
      },
      hover: {
          background: 'darkslateblue',
      }
    },
    cell: {
      header: {
        background: '#2C2C2C',
        text: '#ccc',
        showHorizontalBorder: true,
        showVerticalBorder: true,
        border: '#404040'
      },
      normal: {
          text: '#ccc',
          showHorizontalBorder: true,
          showVerticalBorder: true,
          border: '#404040'
      },
    }
  }); 

  const gridOption = {
    width: 'auto',
    rowHeight: 30,
    columnOptions: {
      resizable: true
    },
    scrollX: false,
    scrollY: true,
    bodyHeight: 'auto',
  }

  const columns = [
    {
      header: 'id',
      name: 'id',
      align: 'center',
      hidden: true
    },
    {
      header: '항목',
      name: 'item',
      align: 'center',
    },
    {
      header: '레벨',
      name: 'level',
      align: 'center'
    },
    {
      header: '강화 비용',
      name: 'cost',
      align: 'center',
      renderer: {
        type: CustomUpgradeRenderer
      }
      // formatter: (object) => {
      //   let result = '';

      //   const rowId = object.row.id;

      //   switch (rowId) {
      //     case 1: /* power */
      //       const nextPowerLevelCost = powerUpgradeTable[powerLevel+1];
      //       if(nextPowerLevelCost > totalCoin)
      //         result += '<button disabled data-id="1" class="btn btn-secondary t-btn-toggle btn-upgrade-disabled">'
      //       else
      //         result += '<button data-id="1" class="btn btn-secondary t-btn-toggle btn-upgrade">'
      //       result += (nextPowerLevelCost+' DVH');
      //       break;
      //     case 2: /* cpu */
      //       const nextCpuLevelCost = cpuUpgradeTable[cpuLevel+1];
      //       if(nextCpuLevelCost > totalCoin)
      //         result += '<button disabled data-id="2" class="btn btn-secondary t-btn-toggle btn-upgrade-disabled">'
      //       else
      //         result += '<button data-id="2" class="btn btn-secondary t-btn-toggle btn-upgrade">'
      //       result += (cpuUpgradeTable[cpuLevel+1]+' DVH');
      //       break;
      //     case 3: /* gpu */
      //       const nextGpuLevelCost = gpuUpgradeTable[gpuLevel+1];
      //       if(nextGpuLevelCost > totalCoin)
      //         result += '<button disabled data-id="3" class="btn btn-secondary t-btn-toggle btn-upgrade-disabled">'
      //       else
      //         result += '<button data-id="3" class="btn btn-secondary t-btn-toggle btn-upgrade">'
      //       result += (gpuUpgradeTable[gpuLevel+1]+' DVH');
      //       break;
      //   }
        
      //   result += '</button>';

      //   return result;
      // }
    }
  ];

  const data = [
    {
      id: 1,
      item: "파워",
      level: powerLevel,
      // cost: "",
    },
    {
      id: 2,
      item: "CPU",
      level: cpuLevel,
      // cost: "",
    },
    {
      id: 3,
      item: "GPU",
      level: gpuLevel,
      // cost: "",
    },
  ]
 
  const handleUpgradeClick = (e) => {
    const id = toInteger(e.target.dataset.id);
    console.log('handleUpgradeClick '+id);
    switch (id) {
      case 1:
        const newPowerLevel = powerLevel + 1;
        setPowerLevel(newPowerLevel);
        break;
      case 2:
        const newCpuLevel = cpuLevel + 1;
        setCpuLevel(newCpuLevel);
        break;
      case 3:
        const newGpuLevel = gpuLevel + 1;
        setGpuLevel(newGpuLevel);
        break;
      default:
        break;
    }
  }
  
  useEffect(() => {
    // const upgradeButtons = document.getElementsByClassName('btn-upgrade');
    // for(let btn of upgradeButtons) {
    //   console.log(btn);
    //   btn.addEventListener('click', handleUpgradeClick);
    // }
  }, [totalCoin, powerLevel, cpuLevel, gpuLevel]);

  return (
    <>
      <div className="game-upgrade-wrap">
          <div className="grid-wrap t-grid">
            <Grid
              ref={gridRef}
              width={gridOption.width} 
              rowHeight={gridOption.rowHeight} 
              bodyHeight={gridOption.bodyHeight}
              columnOptions={gridOption.columnOptions} 
              rowHeaders={gridOption.rowHeaders}
              scrollX={gridOption.scrollX} 
              scrollY={gridOption.scrollY}
              columns={columns}
              data={data}
            />
          </div>
      </div>
    </>
  );
}
  
export default GameUpgradeStore;