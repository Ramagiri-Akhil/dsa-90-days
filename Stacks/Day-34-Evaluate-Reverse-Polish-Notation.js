function evalRPN(tokens){
    let stack = [];
    for(const token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            b = stack.pop();
            a = stack.pop();

            switch(token){
                case "+":
                    stack.push( a + b);
                    break;
                case "-":
                    stack.push( a - b);
                    break;
                case "*":
                    stack.push( a * b);
                    break;
                case "/":
                    stack.push(Math.trunc( a / b));
                    break;
            }
        }
    }
    return stack.pop();
}