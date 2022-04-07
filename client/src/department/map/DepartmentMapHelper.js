import cytoscape from "cytoscape";
// import coseBilkent from 'cytoscape-cose-bilkent';
import dagre from 'cytoscape-dagre';
import axios from "axios";

// cytoscape.use(coseBilkent);
cytoscape.use(dagre);
const departmentTreeApiUrl = process.env.REACT_APP_API_URL_PREFIX+"department/tree";

const defaultWidth = '50';
const defaultHeight = '50';
const depthPixel = 10;

const style = [
    {
        selector: 'node',
        style: {
            // shape: 'hexagon',
            'background-color': 'lightgreen',
            'width': (ele) => {
                return defaultWidth;
                // const depth = ele.data().depth;
                // if(depth == 0) {
                //     return defaultWidth+'px';
                // } else {
                //     return (defaultWidth-(depthPixel*depth))+'px';
                // }
            },
            'height': (ele) => {
                return defaultWidth;
                // const depth = ele.data().depth;
                // if(depth == 0) {
                //     return defaultHeight+'px';
                // } else {
                //     return (defaultHeight-(depthPixel*depth))+'px';
                // }
            },
            // 'background-image': 'url(/icon/manager.gif)',
            'label': 'data(label)'

        }
    },
    {
        selector: 'edge',
        style: {
            'curve-style': 'bezier',
            // label: 'data(label)'
        }
    }
];

const layout = {
    // name: 'grid',
    // rows: 5
    // name: 'cose-bilkent',
    name: 'dagre',
    animate: false,
    gravityRangeCompund: 1.5,
    fit: true,
    title: true
};

let nodesAndEdges = [];

let x = 100;
let y = 100;

const addDepartmentNodeRecursive = (arr, node) => {
    // const depth = node.depth;
    // const hasParent = depth > 0;
    if(node.department) {
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
    }

    arr.push({
        data: {
            id: 'n-'+node.dataId,
            // depth: depth,
            label: node.name,
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
    })
    cy.layout(layout).run();

    return cy;
}
 
export const initDepartmentMap = (cy) => {
    axios
        .get(departmentTreeApiUrl)
        .then((rs) => {
            const result = rs.data.status;
            if(result === 200) {
                nodesAndEdges = [];
                const nodeList = rs.data.data;
                nodeList.forEach(node => {
                    addDepartmentNodeRecursive(nodesAndEdges, node);
                });
                if(cy) {
                    cy.remove('node[*]');
                }
                cy.add(nodesAndEdges);
                cy.layout(layout).run();
            }
        })
}