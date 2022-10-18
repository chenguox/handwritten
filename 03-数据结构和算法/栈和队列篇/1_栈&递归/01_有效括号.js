// 有效括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。 左括号必须以正确的顺序闭合。 注意空字符串可被认为是有效字符串。

// 示例:

// 输入: "()"
// 输出: true

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
      let ch = s.charAt(i);
      if(ch == '(' || ch == '[' || ch == '{') 
          stack.push(ch);
      if(!stack.length) return false;
      if(ch == ')' && stack.pop() !== '(') return false;
      if(ch == ']' && stack.pop() !== '[' ) return false;
      if(ch == '}' && stack.pop() !== '{') return false;
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}'))


// const isValid = function(arr) {
//   const stack = []

//   for(let i = 0; i < arr.length; i++) {
//     const chat = arr[i]
//     if(chat === '(' || chat === '{' || chat === '[') stack.push(chat)
//     if(!stack.length) return false

//     if(chat === ')' && stack.pop() !== '(') return false 
//     if(chat === ']' && stack.pop() !== '[') return false
//     if(chat === '}' && stack.pop() !== '{') return false
//   }

//   return stack.length === 0
// }