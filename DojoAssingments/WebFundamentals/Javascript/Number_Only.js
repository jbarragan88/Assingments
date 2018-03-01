var arr = [1, "apple", -3, "orange", 0.05];
var updateArr = [];
for (var i = 0; i < arr.length-1; i++ ){
        if (typeof arr[i] === "string"){
            continue;
        }
        if (typeof arr[i] === "number"){
            updateArr.push(arr[i]);
            return updateArr;
            console.log(updateArr);
        }
    }
