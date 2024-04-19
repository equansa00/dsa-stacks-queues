const Stack = require('../data_structures/stack');

function isBalanced(s) {
  const matchingBrackets = { '(': ')', '{': '}', '[': ']' };
  const stack = new Stack();
  for (const char of s) {
      if (matchingBrackets[char]) {
          stack.push(char);
      } else if (Object.values(matchingBrackets).includes(char)) {
          if (stack.isEmpty() || matchingBrackets[stack.pop()] !== char) {
              return false;
          }
      }
  }
  return stack.isEmpty();
}
module.exports = isBalanced;
