import React from 'react';
import Layout from 'layout/Layout';
import './DepartmentPage.css';
import 'tui-tree/dist/tui-tree.min.css';
import 'tui-context-menu/dist/tui-context-menu.min.css';

import { useEffect } from 'react';
import { createDepartmentTree, initDepartmentTreeEvent } from 'department/tree/DepartmentTreeHelper';
import { createDepartmentCytoscape, initDepartmentMap } from 'department/map/DepartmentMapHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

function DepartmentPage() {

  let cy;

  useEffect(() => {
    let tree = createDepartmentTree(document.getElementById('department-tree'));
    cy = createDepartmentCytoscape(document.getElementById('department-map'));
    initDepartmentTreeEvent(tree, cy);
    initDepartmentMap(cy);
  });


  return (
    <>
      <Layout>
        <div className="department-wrap">
          <div id="department-tree" className="department-tree tui-tree-wrap" />
          <div className="separator-5" />
          <div id="department-map" className="department-map cyto-wrap" />
        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;