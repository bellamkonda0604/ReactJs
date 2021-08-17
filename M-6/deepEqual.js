// "Type 'deepEqual(x,y)' to check if x and y are equal, x and y can be any values")

var deepEqual = function (obj1, obj2) {
    if (obj1 === obj2) { //checks if both are of same types if yes, returns True.
        return true;
    }else if ((typeof obj1 == "object" && obj1 != null) && (typeof obj2 == "object" && obj2 != null)) { 
        if (Object.keys(obj1).length != Object.keys(obj2).length)
            return false;
        for (var prop in obj1) {
            if (y.hasOwnProperty(prop)){  
                if (! deepEqual(obj1[prop], obj2[prop]))
                    return false;
                } else
                    return false;
            }

        return true;
    }else 
        return false;
}

console.log(deepEqual("1",))  // false 
console.log(deepEqual(6,"6"))  // false
console.log(deepEqual(6,6.0)) // true