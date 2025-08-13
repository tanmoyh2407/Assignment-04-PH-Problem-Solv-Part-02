function isSame(arr1, arr2) {
    if(Array.isArray(arr1) === false || Array.isArray(arr2) === false)
        return 'Invalid';
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                continue;
            }
            else {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

console.log(isSame({data: [2 , 5 , 6] } , [2 , 5 , 6]));