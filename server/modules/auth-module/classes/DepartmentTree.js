import Tree from "../../api/classes/Tree.js";

class DepartmentTree extends Tree {
    constructor(department) {
        super(department.name);
        this.id = department.id;
        this.name = department.name;
        this.description = department.description;
        this.department = department.department;
    }
    isRoot() {
        return this.department == null;
    }
}

export default DepartmentTree;