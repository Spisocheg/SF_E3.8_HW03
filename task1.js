function task1(nums){
    counts = {
        'equal': 0,
        'odd': 0,
        'zero': 0,
    }
        
    for (var i = 0; i < nums.length; i++) {
        if (typeof nums[i] === "number") {
            if (isNaN(nums[i])) {
                continue;
            }
            if (nums[i] == 0) {
                counts['zero']++;
            } else if (nums[i] % 2 == 0) {
                counts['equal']++;
            } else if (nums[i] % 2 != 0) {
                counts['odd']++;
            }
        } else {
            continue;
        }
    }
    
    console.log(`Equal: ${counts['equal']},\nOdd: ${counts['odd']},\nZero: ${counts['zero']}`);
}

testArray = [0, 1, 2, 3, 4, 5, 6, 7, NaN, false, true, 'test', [99]];
task1(testArray);
