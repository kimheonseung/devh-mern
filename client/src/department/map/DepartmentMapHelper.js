import cytoscape from "cytoscape";
import axios from "axios";

const departmentTreeApiUrl = process.env.REACT_APP_API_URL_PREFIX+"department/tree";

const style = [
    {
        selector: 'node',
        style: {
            // shape: 'hexagon',
            'background-color': 'lightgreen',
            'width': '25px',
            'height': '25px',
            // 'background-image': 'url(/icon/manager.gif)',
            'label': 'data(label)'

        }
    },
    {
        selector: 'edge',
        style: {
            label: 'data(label)'
        }
    }
];

const layout = {
    name: 'grid',
};

let nodesAndEdges = [];

let x = 100;
let y = 100;
let depth = 0;

const addDepartmentNodeRecursive = (arr, node) => {
    const hasParent = node.department;
    if(hasParent) {
        const parentNode = node.department;
        nodesAndEdges.push({
            data: {
                id: 'e-'+node.dataId,
                label: parentNode.name,
                source: 'n-'+parentNode.id,
                target: 'n-'+node.dataId,
            },
            group: 'edges'
        });
        depth += 1;
    }
    arr.push({
        data: {
            id: 'n-'+node.dataId,
            label: node.name,
        },
        position: {
            x: hasParent ? x+50*(depth-1) : x+50*depth,
            y: hasParent ? y+50*depth : y+50*(depth-1),
        },
        group: 'nodes'
    });
    if(node.children.length > 0) {
        node.children.forEach(childNode => {
            addDepartmentNodeRecursive(arr, childNode);
        })
    }
}

export const createDepartmentCytoscape = (el) => {
    let cy = new cytoscape({
        container: el,
        style: style,
        layout:layout
    })
    cy.layout({ name: 'preset' }).run();

    return cy;
}

export const initDepartmentMap = (cy, treeData) => {
    axios
        .get(departmentTreeApiUrl)
        .then((rs) => {
            const result = rs.data.status;
            if(result == 200) {
                nodesAndEdges = [];
                const nodeList = rs.data.data;
                nodeList.forEach(node => {
                    addDepartmentNodeRecursive(nodesAndEdges, node);
                });
                cy.add(nodesAndEdges);

            }
        })
}