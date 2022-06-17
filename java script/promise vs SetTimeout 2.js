const promise = new Promise((resolve,reject) => {
    resolve('a')
  })
  
  setTimeout(() => {
    console.log('b')
  })
  
  promise.then((msg) => {
    console.log(msg)
  })