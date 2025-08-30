
const page = async () => {
  // this is for to check loading
       await new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                    //  resolve("Intentionally Loading...............");  to see loading file
                     reject("I am Throwing an Error From Blog File"); // to see error file
                 },2000)
          })

  return (
    <div>My Blog</div>
  )
}

export default page