import DepartmentData from '../models/department.js';
import apiResponse from '../../api/api-response.js';
import paging from '../../api/paging.js';
import DepartmentTree from '../classes/DepartmentTree.js'

export const findTree = async (req, res) => {
    console.log('findDepartmentTree');
    try {
        const departmentTrees = [];
        const departments = await DepartmentData.find().populate('department');
        const result = [];
        
        departments.forEach(d => departmentTrees.push(new DepartmentTree(d)));
        for(let dt of departmentTrees) {
            if(dt.isRoot()) {
                result.push(dt);
                continue;
            }
            for(let departmentTree of departmentTrees) {
                if(dt.department.id == departmentTree.id) {
                    departmentTree.addChild(dt);
                    break;
                }
            }
        }
        apiResponse.success(res, result);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const findAll = async (req, res) => {
    console.log('findAllDepartment');
    try {
        const requestPaging = paging.parseQueryString(req);
        const total = await DepartmentData.countDocuments();
        const departments = await DepartmentData.find()
                                                .sort({id: 1 /* 1은 오름차순 -1은 내림차순 */})
                                                .skip((requestPaging.page - 1) * requestPaging.rows)
                                                .limit(requestPaging.rows);
        apiResponse.successWithPaging(res, departments, paging.calculatePaging(requestPaging, total));
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const findByName = async (req, res) => {
    console.log('findDepartmentByName');
    const name = req.query.name;
    if(name) {
        try {
            const departments = await DepartmentData.findOne({name: name});
            apiResponse.success(res, departments);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'name is not defined.');
    }
}

export const create = async (req, res) => {
    console.log('createDepartment');
    const department = req.body;
    
    try {
        const departmentId = department.departmentId;
        const parent = await DepartmentData.findOne({id: departmentId});
        if(parent) {
            department.department = parent;
        }
        const newDepartment = new DepartmentData(department);
        await newDepartment.save();
        apiResponse.success(res, newDepartment);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const update = async (req, res) => {
    console.log('updateDepartment');
    const newDepartment = req.body;

    try {
        const oldDepartment = await DepartmentData.findOne({id: newDepartment.id}).populate('department');

        if(!oldDepartment) {
            throw new Error('Department not exits.');
        }

        const newDepartmentId = newDepartment.departmentId;
        const newParent = await DepartmentData.findOne({id: newDepartmentId});
        if(newParent) {
            newDepartment.department = newParent;
        }

        await DepartmentData.updateOne({id: oldDepartment.id}, {$set: newDepartment});
        apiResponse.success(res, true);
    } catch (error) {
        apiResponse.error(res, error.message);
    }
}

export const deleteByName = async (req, res) => {
    console.log('deleteAuthorityByName');
    const name = req.body.name;
    if(name) {
        try {
            const departments = await DepartmentData.find().populate('department');
            const result = [];
            const departmentTrees = [];
            departments.forEach(d => departmentTrees.push(new DepartmentTree(d)));
            for(let dt of departmentTrees) {
                if(dt.isRoot()) {
                    result.push(dt);
                    continue;
                }
                for(let departmentTree of departmentTrees) {
                    if(dt.department.id == departmentTree.id) {
                        departmentTree.addChild(dt);
                        break;
                    }
                }
            }
            const middleTree = findMiddleTreeByName(name, result);
            const ids = [];
            findAllChildrenIds(ids, middleTree);
            await DepartmentData.deleteMany({id: {$in: ids}});
            apiResponse.success(res, true);
        } catch (error) {
            apiResponse.error(res, error.message);
        }
    } else {
        apiResponse.error(res, 'name is not defined.');
    }
    
}

/**
 * 해당 이름을 가진 노드 (자식을 선형으로 포함하는) 조회
 * @param {String} name 
 * @param {Tree} tree 
 * @returns 
 */
const findMiddleTreeByName = (name, tree) => {
    if(tree.length) {
        for(let i = 0 ; i < tree.length ; ++i) {
            let node = tree[i];
            if(node.name == name) {
                return node;
            } else {
                if(node.children.length == 0) {
                    continue;
                }
                for(let k = 0 ; k < node.children.length ; ++k) {
                    let tempNode = findMiddleTreeByName(name, node.children[k]);
                    if(tempNode) {
                        return tempNode;
                    }
                }
            }
        }
    } else {
        if(tree.name == name) {
            return tree;
        } else {
            for(let k = 0 ; k < tree.children.length ; ++k) {
                let tempNode = findMiddleTreeByName(name, tree.children[k]);
                if(tempNode) {
                    return tempNode;
                }
            }
        }
    }
    
}

/**
 * 선형 트리에서 id 필드를 배열에 담는다.
 * @param {Array} array 
 * @param {Tree} tree 
 */
const findAllChildrenIds = (array, tree) => {
    array.push(tree.id);
    for(let i = 0 ; i < tree.children.length ; ++i ) {
        findAllChildrenIds(array, tree.children[i]);
    }
}