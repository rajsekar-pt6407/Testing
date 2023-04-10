const pro=new Promise((response,reject)=>{
  if(true)
  return response;
  else
  return reject;
})

pro.then(()=>{console.log("ok")})
.catch(()=>{console.log("false")})