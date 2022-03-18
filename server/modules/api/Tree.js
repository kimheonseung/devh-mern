/**
 * 트리 구조가 필요한 객체가 상속받을 객체.
 * 반드시 isRoot를 오버라이딩 해야
 */
class Tree {
    constructor(text) {
        this.text = text;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    isRoot() {
        throw new Error('isRoot() must be implement.');
    }
}

export default Tree;