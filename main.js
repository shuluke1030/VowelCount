function getCount(str) {
    let arr = str.split("");
    let suma = 0;
    let sume = 0;
    let sumi = 0;
    let sumo = 0;
    let sumu = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'a'){
            suma+= 1;
        }else if(arr[i] === 'e'){
            sume+= 1;
        }else if(arr[i] === 'i'){
            sumi+= 1;
        }else if(arr[i] === 'o'){
            sumo+= 1;
        }else if(arr[i] === 'u'){
            sumu+= 1;
        }
    }
return suma + sume + sumi + sumo + sumu;

    
}
console.log(getCount("abracadabra"))

// var vowelsCount = 0;
// var vowels = ["a","e","i","o","u"];
// for(var i = 0;i < str.length;i++){
//   for(var j=0;j<vowels.length;j++){
//     if(str[i] === vowels[j]){
//       vowelsCount++;