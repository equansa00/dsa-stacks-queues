const Stack = require('../data_structures/stack'); 

function calc(expression) {
    const stack = new Stack();
    const tokens = expression.split(' ');
    tokens.reverse().forEach(token => {
        if (['+', '-', '*', '/'].includes(token)) {
            const a = stack.pop();
            const b = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        } else {
            stack.push(parseFloat(token));
        }
    });
    return stack.pop();
}

module.exports = calc;
