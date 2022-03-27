import React from 'react';
import Layout from 'layout/Layout';
import './DepartmentPage.css';
import 'tui-tree/dist/tui-tree.min.css';
import 'tui-context-menu/dist/tui-context-menu.min.css';

import { useEffect } from 'react';
import { createDepartmentTree, initDepartmentTreeEvent } from 'department/tree/DepartmentTreeHelper';
import { createDepartmentCytoscape, getTreeData, initDepartmentMap } from 'department/map/DepartmentMapHelper';

function DepartmentPage() {

  let tree;
  let cy;

  useEffect(() => {
    tree = createDepartmentTree(document.getElementById('department-tree'));
    initDepartmentTreeEvent(tree);

    cy = createDepartmentCytoscape(document.getElementById('department-map'));
    initDepartmentMap(cy, tree);
  });

  return (
    <>
      <Layout>
        <div className="department-wrap">
          <div id="department-tree" className="department-tree tui-tree-wrap"></div>
          <div className="separator-5"></div>
          <div id="department-map" className="department-map cyto-wrap">맵</div>
        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;