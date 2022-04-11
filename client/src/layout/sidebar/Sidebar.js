import React, { useEffect } from 'react';
import { faChartBar, faGamepad, faLayerGroup, faPlay, faSearch, faTable } from '@fortawesome/free-solid-svg-icons';
import SidebarMenu from './SidebarMenu';

function SideBar() {
  const menuSelected = (path) => {
    const aMenuArr = document.getElementsByClassName('t-menu-a');
    for(let i = 0 ; i < aMenuArr.length ; ++i) {
      const menuHref = aMenuArr.item(i).getAttribute('href');
      if(path === menuHref)
        aMenuArr.item(i).children[0].classList.add('t-menu-selected');
    }
  }
  useEffect(() => {
    menuSelected(window.location.pathname);
  })

  /* Menu */
  const game = {
    menu: {
      title: '게임',
      group: 'Game',
      hasSubMenu: true,
      icon: faGamepad,
    },
    subMenu: {
      game: {
        key: 'game',
        title: '게임 시작',
        group: 'Game',
        icon: faPlay,
        href: '/game/play'
      },
      rank: {
        key: 'rank',
        title: '순위',
        group: 'Game',
        icon: faTable,
        href: '/game/rank'
      }
    }
  }

  const department = {
    menu: {
      title: '부서 관리',
      group: 'Department',
      hasSubMenu: false,
      icon: faLayerGroup,
      href: '/department'
    }
  }

  const search = {
    menu: {
      title: '검색',
      group: 'Search',
      hasSubMenu: false,
      icon: faSearch,
      href: '/search'
    }
  }

  const statistics = {
    menu: {
      title: '통계',
      group: 'Statistics',
      hasSubMenu: false,
      icon: faChartBar,
      href: '/statistics'
    }
  }

  useEffect(() => {
  })

  return (
      <>
      {/* flex를 위한 div */}
      <div>
        <div className="t-sidebar" id="sidebar-wrapper">
          <div className="t-sidebar-logo">Developer H.</div>
          <div className="p-2"></div>
          <div className="list-group list-group-flush">
              <SidebarMenu menuObject={game} />
              <SidebarMenu menuObject={department} />
              <SidebarMenu menuObject={search} />
              <SidebarMenu menuObject={statistics} />
          </div>
        </div>
      </div>
      </>
  );
}

export default SideBar;