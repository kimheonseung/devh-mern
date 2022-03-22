import React from 'react';
import Layout from 'layout/Layout';
import './DepartmentPage.css';
import 'tui-tree/dist/tui-tree.min.css';
import Tree from 'tui-tree';

import { useEffect } from 'react';
import { useState } from 'react';

function DepartmentPage() {

  let tree;
  const [treeOption, setTreeOption] = useState({
    nodeDefaultState: 'opened',
  });

  const apiUrl = process.env.REACT_APP_API_URL_PREFIX+"department/tree";

  useEffect(() => {
    tree = new Tree(document.getElementById("department-tree"), treeOption);
    tree.on('selectContextMenu', (e) => {
      const command = e.command;
      const nodeId = e.nodeId;

      switch (command) {
          case 'insertDepartment':
              tree.createChildNode(nodeId);
              break;
          case 'updateDepartment':
              tree.editNode(nodeId);
              break;
          case 'deleteDepartment':
              tree.remove(nodeId);
              break;
      }
    });
    tree
      .enableFeature('Selectable')
      .enableFeature('ContextMenu', {
        menuData: [
          {title: '부서 추가', command: 'insertDepartment'},
          {title: '부서 수정', command: 'updateDepartment'},
          {title: '부서 삭제', command: 'deleteDepartment'},
        ]
      })
      .enableFeature('Ajax', {
        command: {
          read: {
            url: apiUrl,
            contentType: 'application/json',
            method: 'GET',
            /*
            params: (treeData) => {
              console.log(treeData);
              return treeData;
            }
            */
          },
          /*
          insert: {
            url: 'data/response.json',
            contentType: 'application/json',
            params: function(treeData) {
                return {
                    targetId: tree.getNodeData(treeData.parentId).pid,
                    productName: treeData.data.text
                };
            }
          },
          update: {
            url: 'data/response.json',
            contentType: 'application/json',
            params: function(treeData) {
                return {
                    productId: tree.getNodeData(treeData.nodeId).pid,
                    productName: treeData.data.text
                };
            }
          },
          delete: {
            url: 'data/response.json',
            contentType: 'application/json',
            params: function(treeData) {
                return {
                    productId: tree.getNodeData(treeData.nodeId).pid
                };
            }
          },
          */
        },
        parseData: (command, responseData) => {
          if(responseData) {
            return responseData.data[0];
          } else {
            return false;
          }
        }
      });

    tree.on('select', (eventData) => {
      const nodeData = tree.getNodeData(eventData.nodeId);
      // equipService.searchByGroupId(nodeData.groupId);
    });

    tree.on('beforeOpenContextMenu', function(evt) {
      if(!evt.nodeId) {
        alert('그룹 이름에 우클릭 하세요.');
        return;
      }
    });

    tree.on('successAjaxResponse', (evt) => {
      tree.select(evt.data[0])
    });
  });

  return (
    <>
      <Layout>
        <div className="department-wrap">
          <div id="department-tree" className="department-tree">트리</div>
          <div className="separator-5"></div>
          <div className="department-map">맵</div>
        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;