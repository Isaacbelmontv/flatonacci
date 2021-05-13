//Flatonacci
function createFlatonacci(data, n){
    if(data.length >= 3 && n > 0){
        for (let index = 0; index < n; index++) {
            var number = 0;
            number += data[data.length-1]
            number += data[data.length-2]
            number += data[data.length-3]
            if(data.length < n){
                data.push(number);
            }   
        }        
        console.log(data)
    }else if(n == 0){
        console.log("Try with other number in variable n: ", Math.random() * 100, '💩');
    }
    else{
        console.log("Error")
    }
}
createFlatonacci([0, 0 ,0], 0);

