import cytoscape from "cytoscape";
import axios from "axios";

const departmentTreeApiUrl = process.env.REACT_APP_API_URL_PREFIX+"department/tree";

export const createDepartmentCytoscape = (el) => {
    return new cytoscape({
        container: el
    })
}

export const initDepartmentMap = (cy, treeData) => {
    axios
        .get(departmentTreeApiUrl)
        .then((rs) => {
            const result = rs.data.status;
            if(result == 200) {
                const treeArray = rs.data;
                
            }
        })
}