export function renderExpression(id){
  const expression = generateExpression();
  console.log(expression);
  document.getElementById(id).innerHTML = '\\[' + expression + '\\]';
  MathJax.typeset();
}

function generateExpression() {
  const operators = ['+', '-', '*', '/', '^'];
  const variables = ['x', 'z', 'y'];
  const openParentheses = ['('];
  const closeParentheses = [')'];

  let terms = Math.floor(Math.random() * 3) + 2;
  let expression = '';

  for (let i = 0; i < terms; i++) {
    if (i !== 0) {
      
      if (Math.random() < 0.9) {
        expression += openParentheses[Math.floor(Math.random() * openParentheses.length)];
      }

      
      expression += variables[Math.floor(Math.random() * variables.length)];
      expression += operators[Math.floor(Math.random() * operators.length)];

      expression += Math.floor(Math.random() * 10) + 1;

      if (Math.random() < 0.9) {
        expression += closeParentheses[Math.floor(Math.random() * closeParentheses.length)];
      }
    } else {
      expression += variables[Math.floor(Math.random() * variables.length)];
      expression += operators[Math.floor(Math.random() * operators.length)];
      expression += Math.floor(Math.random() * 10) + 1;
    }


    if (i !== terms - 1) {
      expression += ' \\frac{';

      expression += Math.floor(Math.random() * 10) + 1;

      expression += '}{';

      expression += Math.floor(Math.random() * 10) + 1;

      expression += '}';
    }
    if(i !== terms - 1){
      expression += ' \\times ';
    }
  }

  return expression;
}
