function x() {
    Promise.reject('x')
    return Promise.resolve('y')
  }
  
  async function log() {
    const val =  await x()
    console.log(val)
  }
  
  log()