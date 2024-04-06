// 1. isLoggedIn (if user get token on successful login)
export const isLoggedIn=()=>{
    let data = localStorage.getItem("data");
    if(data == null){
        return false;
    }else{
        return true;
    }
}

// 2. doLogin (will set data(token) in localStorage)
export const doLogin = (data, next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next();  // next is a callback func (after login where do user want to redirect)
}

// 3. doLogout (will remove data(token) from localStorage)
export const doLogout=(next)=>{
    localStorage.removeItem("data");
    next();  // next is a callback func (after login where do user want to redirect)
}

// 4. get currentUser
export const getCurrentUserDetail=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem("data")).user;
    }else{
        return false;
    }
}

// What it means? return JSON.parse(localStorage.getItem("data")).user;
// get user details from response
// what is user? => We are sending JwtAuthResponse for "/auth/login" API
// and "user" is field of type UserDto in JwtAuthResponse class