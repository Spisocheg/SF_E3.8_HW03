function task3(num1) {
    function innerTask3(num2) {
        return num1 + num2;
    }
    return innerTask3
}

console.log(task3(3)(9));
