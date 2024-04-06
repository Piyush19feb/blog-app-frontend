import { myAxios } from "./helper";

// api for registering user for the very first time
export const signUp = (user) => {
  return myAxios.post("/auth/register", user).then((response) => response.data);
};

// login user
export const loginUser = (loginDetail)=>{
  return myAxios.post("/auth/login", loginDetail).then((response)=> response.data);
}