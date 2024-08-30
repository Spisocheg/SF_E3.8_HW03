function task4(start, stop) {
    let current = start;
    
    let logger = setInterval(function () {
        console.log(current);
        
        if (current == stop) {
            clearInterval(logger);
        }
        
        current++;
    }, 1000);
}

task4(5, 15);
