var equipGroupService = function() {

	let treeInstance;

	const defaultTreeOptions = {
		nodeDefaultState: 'opened',
		/*
		template: {
            internalNode: // Change to Mustache's format
                '<div class="tui-tree-content-wrapper" style="padding-left: {{indent}}px">' + // Example for using indent value
                    '<button type="button" class="tui-tree-toggle-btn tui-js-tree-toggle-btn">' +
                        '<span class="tui-ico-tree"></span>' +
                        '{{stateLabel}}' +
                    '</button>' +
                    '<span class="tui-tree-text tui-js-tree-text">' +
                        '<span class="tui-tree-ico tui-ico-folder"></span>' +
                        '{{text}}' +
                    '</span>' +
                '</div>' +
                '<ul class="tui-tree-subtree tui-js-tree-subtree">' +
                    '{{children}}' + // Mustache's format
                '</ul>',
            leafNode:
                '<div class="tui-tree-content-wrapper" style="padding-left: {{indent}}px">' + // Example for using indent value
                    '<span class="tui-tree-text {{textClass}}">' +
                        '<span class="tui-tree-ico tui-ico-file"></span>' +
                        '{{text}}' +
                    '</span>' +
                '</div>'
		
		}
		*/
	};
	
	const init = () => {
		const tree = new tui.Tree(document.getElementById('equip-group-tree'), defaultTreeOptions);
		treeInstance = tree;

		tree.on('selectContextMenu', (e) => {
            const command = e.command;
            const nodeId = e.nodeId;

            switch (command) {
                case 'insertGroup':
                    tree.createChildNode(nodeId);
                    break;
                case 'updateGroup':
                    tree.editNode(nodeId);
                    break;
                case 'deleteGroup':
                    tree.remove(nodeId);
                    break;
				case 'insertEquip':
					const equipModal = document.getElementById('equip-modal');
					if(!nodeId) {
						alert('그룹 이름에 우클릭 하세요.');
						return;
					}
					equipModal.classList.remove('hidden');
					document.getElementById('group-name').innerHTML = treeInstance.getNodeData(nodeId).name;
					document.getElementById('edit-mode').innerHTML = '장비 추가';
					document.getElementById('group-id').value = treeInstance.getNodeData(nodeId).groupId;
					break;
            }
        });
        tree
        	.enableFeature('Selectable')
        	.enableFeature('ContextMenu', {
				menuData: [
					{title: '그룹 추가', command: 'insertGroup'},
					{title: '그룹 수정', command: 'updateGroup'},
					{title: '그룹 삭제', command: 'deleteGroup'},
					{title: '장비 추가', command: 'insertEquip'},
				]
			})
			.enableFeature('Ajax', {
				command: {
					read: {
						url: apiBaseUrl + '/equip-group',
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
				equipService.searchByGroupId(nodeData.groupId);
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
	}

	const getSelectedGroupId = () => {
		const selectedNode = treeInstance.getSelectedNodeId();
		return selectedNode ? treeInstance.getNodeData(selectedNode).groupId : 0;
	}

	const getSelectedNodeData = () => {
		const nodeId = treeInstance.getSelectedNodeId();
		return treeInstance.getNodeData(nodeId);
	}

	const addEquipGroup = () => {
		document.getElementById('equip-modal-confirm')
	}

	const initEquipManagementEditPage = () => {
		init();
	}

	return {
		initEquipManagementEditPage: initEquipManagementEditPage,
		getSelectedGroupId: getSelectedGroupId,
		getSelectedNodeData: getSelectedNodeData
	}

}()