import React, { useEffect } from 'react';
import Layout from 'layout/Layout';
import './DepartmentPage.css';
import 'tui-tree/dist/tui-tree.min.css';
import 'tui-context-menu/dist/tui-context-menu.min.css';
import { createDepartmentTree, initDepartmentTreeEvent, refresh } from 'department/tree/DepartmentTreeHelper';
import { createDepartmentCytoscape, initDepartmentMap } from 'department/map/DepartmentMapHelper';

function DepartmentPage() {

  let tree;

  useEffect(() => {
    tree = createDepartmentTree(document.getElementById('department-tree'));
    console.log(tree);
    let cy = createDepartmentCytoscape(document.getElementById('department-map'));
    initDepartmentTreeEvent(tree, cy);
    initDepartmentMap(cy);
  });

  const handleClick = () => {
    refresh(tree);
  }

  return (
    <>
      <Layout>
        <div className="department-wrap">
          <div id="department-tree" className="department-tree tui-tree-wrap" />
          <div className="separator-5" />
          <div id="department-map" className="department-map cyto-wrap" />
          <button id="test" onClick={handleClick} />
        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;