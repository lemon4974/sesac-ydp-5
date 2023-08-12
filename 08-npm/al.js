// https://www.acmicpc.net/problem/10828

//case 문,,, if 문

const stack = [];
let answer = 0;


switch() {
    case 'push':
        // 다른 명령어와 달리 뒤에 숫자가 부가적으로 붙는다... 처리?
        stack.push();
        break;
    case 'pop':
        if(stack.length === 0){
            answer =  -1;
        } else{
            stack.pop();
        }
        break;
    case 'size':
        answer = stack.length;
        break;
    case 'empty':
        if(stack.length === 0){
            answer =  1;
        } else{
            answer =  0;
        }
        break;
    case 'top':
        if(stack.length === 0){
            answer =  -1;
        } else{
            answer = stack[stack.length-1];
        }
        break;
}

