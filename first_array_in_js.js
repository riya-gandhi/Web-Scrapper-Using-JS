let arr = [];
let args = process.argv;
let n = parseInt(args[2]);

for(let i=0;i<n;i++){

    let val = parseInt(args[i+3]);
    arr.push(val);
}
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}