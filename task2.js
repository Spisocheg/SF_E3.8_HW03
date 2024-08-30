function task2(num) {
    if (num > 1000) {
        return `Error: ${num} is qreater than 1000`;
    } else if (num < 0) {
        return `Error: ${num} is less than 0`;
    }
    
    for (var i = 2; i <= 1000; i++) {
        if (i == num) {
            break;
        }
        if (num % i == 0) {
            return `${num} is not prime`;
        }
    }
    
    return `${num} is prime`;
}

console.log(task2(11));
