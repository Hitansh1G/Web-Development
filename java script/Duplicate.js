//Write your function here


function duplicate(arr) {
    // Write Logic here
    
    var arr2 = new Array(2*arr.length);
    for(var i=0 ; i<arr2.length ; i++){
        arr2[i]=arr[i%arr.length];
    }
    return arr2;
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

  const ans = duplicate(nums).join(' ')
  process.stdout.write(ans)
  process.exit();
});