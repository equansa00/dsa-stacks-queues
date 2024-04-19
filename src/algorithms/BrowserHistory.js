const Stack = require('../data_structures/stack'); 

class BrowserHistory {
    constructor() {
        this.backStack = new Stack();
        this.forwardStack = new Stack();
    }

    visit(site) {
        this.backStack.push(site);
        this.forwardStack = new Stack(); // Clear forward history
    }

    back() {
        if (this.backStack.isEmpty()) {
            throw new Error("No back history");
        }
        this.forwardStack.push(this.backStack.pop());
        return this.backStack.peek();
    }

    forward() {
        if (this.forwardStack.isEmpty()) {
            throw new Error("No forward history");
        }
        this.backStack.push(this.forwardStack.pop());
        return this.backStack.peek();
    }
}

module.exports = BrowserHistory;
