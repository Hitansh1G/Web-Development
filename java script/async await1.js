async function x() {
    try{
      await Promise.reject("Rejected!!")
    } catch(e) {
      console.log(e)
    }
  }
  
  x()
  .catch((msg) => {
    console.log(msg)
  })