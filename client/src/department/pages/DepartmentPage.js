import React from 'react';
import Layout from 'layout/Layout';
import './DepartmentPage.css';
import 'tui-tree/dist/tui-tree.min.css';
import 'tui-context-menu/dist/tui-context-menu.min.css';
import Tree from 'tui-tree';

import { useEffect } from 'react';
import { useState } from 'react';

function DepartmentPage() {

  let tree;
  const [treeOption, setTreeOption] = useState({
    nodeDefaultState: 'opened',
  });
  const [modal, setModal] = useState(false);
  let contextMenuEnable = true;
  const getContextMenu = (flag) => {
    return [
      {title: '부서 추가', command: 'insertDepartment', disable: !flag},
      {title: '부서 수정', command: 'updateDepartment', disable: !flag},
      {title: '부서 삭제', command: 'deleteDepartment', disable: !flag},
    ];
  }

  const apiUrl = process.env.REACT_APP_API_URL_PREFIX+"department/";

  useEffect(() => {
    tree = new Tree(document.getElementById("department-tree"), treeOption);
    tree.on('selectContextMenu', (e) => {
      const command = e.command;
      const nodeId = e.nodeId;
      const nodeData = tree.getNodeData(nodeId);

      if(nodeData) {
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
      } else {
        alert('부서 이름에 우클릭 하세요.');
      }

      
    });
    tree
      .enableFeature('Selectable')
      .enableFeature('Editable', {
        dataKey: 'text'
      })
      // .enableFeature('Draggable', {
      //   isSortable: true
      // })
      .enableFeature('ContextMenu', {
        menuData: getContextMenu(contextMenuEnable)
      })
      .enableFeature('Ajax', {
        command: {
          read: {
            url: apiUrl+'tree',
            contentType: 'application/json',
            method: 'GET',
            /*
            params: (treeData) => {
              console.log(treeData);
              return treeData;
            }
            */
          },
          update: {
            url: apiUrl+'update',
            method: 'POST',
            contentType: 'application/json',
            params: function(treeData) {
              const oldNode = tree.getNodeData(treeData.nodeId);
              const oldDepartmentId = oldNode.dataId;
                return {
                    id: oldDepartmentId,
                    name: treeData.data.text
                };
            }
          },
          
          create: {
            url: apiUrl+'create',
            method: 'POST',
            contentType: 'application/json',
            params: function(treeData) {
              const name = treeData.data.text;
              const parentId = treeData.parentId;
              const parentNode = tree.getNodeData(parentId);
              return {
                name: name,
                departmentId: parentNode.dataId
              };
            }
          },
          
          remove: {
            url: apiUrl+'delete',
            method: 'POST',
            contentType: 'application/json',
            params: function(treeData) {
              const nodeId = treeData.nodeId;
              const node = tree.getNodeData(nodeId);
              return {
                name: node.name
              };
            }
          },
          
        },
        parseData: (command, responseData) => {
          switch (command) {
            case 'read':
              return responseData.data[0];
            case 'update':
            case 'create':
            case 'remove':
              alert(responseData.data[0] ? 'Success !' : 'Failed !');
              return responseData.data[0];
            default:
              break;
          }
        }
      });

    tree.on('select', (eventData) => {
      const nodeData = tree.getNodeData(eventData.nodeId);
      // equipService.searchByGroupId(nodeData.groupId);
    });

    tree.on('beforeCreateChildNode', function(event) {
      if (event.cause === 'blur') {
          tree.finishEditing();
          tree.remove(event.nodeId);
          return false;
      }
      return window.confirm('Are you sure you want to create?');
    });

    tree.on('beforeEditNode', function(event) {
      if (event.cause === 'blur') {
          tree.finishEditing();
          return false;
      }
      return window.confirm('Are you sure you want to edit?');
    });

    tree.on('beforeOpenContextMenu', function(evt) {
      evt.nodeId ? contextMenuEnable = true : contextMenuEnable = false;
      // if(!evt.nodeId) {
      //   // alert('그룹 이름에 우클릭 하세요.');
      //   contextMenuEnable = false;
      // } else {
      //   contextMenuEnable = true;
      // }
      tree.changeContextMenu(getContextMenu(contextMenuEnable));
    });

    tree.on('successAjaxResponse', (evt) => {
      switch (evt.command) {
        case 'read':
          tree.select(evt.data[0]);
          break;
        case 'update':
        case 'create':
        case 'remove':
          break;
      
        default:
          break;
      }
      
    });
  });

  return (
    <>
      <Layout>
        <div className="department-wrap">
          <div id="department-tree" className="department-tree tui-tree-wrap"></div>
          <div className="separator-5"></div>
          <div className="department-map">맵</div>
        </div>
        <div id="department-insert" className="department-modal">

        </div>
      </Layout>
    </>
  );
}

export default DepartmentPage;