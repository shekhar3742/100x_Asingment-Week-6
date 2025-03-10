const jwt = require("jsonwebtoken");
const jwtpassword = "Rahul";

const zod = require("zod");

const emailschema = zod.string().email();
const passwordschema = zod.string().min(6);


function signjwt(username, password){

  const usernameResponse = emailschema.safeParse(username);
  const passwordResponse = passwordschema.safeParse(password);
  if(!usernameResponse.success || !passwordResponse.success){
    return null;
  }
  const signature =  jwt.sign({
    username},
      jwtpassword );
  return signature;
}

const ans = signjwt("rahul@gmail.com", "124578");
console.log(ans);


function jwtverify(token){

  try{
    jwt.verify(token, jwtpassword);
    return true;
  }
  catch(e){
    
  }
  return false;
  
  
}

const verifyans = jwtverify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTc0MTYyNDA0M30.BB3XP-kSkeXIgc0GaLs4r_Xc6S5DbxvMXRHc1knIaks")
console.log(verifyans);





function decode(token){
  const decoded = jwt.decode(token);
  if(decoded){
    return true;
  }
  else{
    return false ;
  }
}

console.log(decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsQGdtYWlsLmNvbSIsImlhdCI6MTc0MTYyMzI5MH0._dvkwZjXhpfadXLKdf75SHrUVJVcWmdX72AwBDqKs0"))


