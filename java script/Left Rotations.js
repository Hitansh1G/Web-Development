//Write your function here


function rotateLeft(arr) {
    var first = arr[0];
    var n = arr.length;
    for(var i=0 ; i<n-1 ; i++){
        arr[i]=arr[i+1];
    }
    arr[n-1]=first;
    return arr;
}



// Input and output has already been handled for you



process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let arr = chunk.toString()
  arr = arr.split(' ')
  let nums = []
  for(const c of arr) {
      nums.push(parseInt(c))
  }

  const ans = rotateLeft(nums).join(' ')
  process.stdout.write(ans)
  process.exit();
});