// isLoggedIn=>
export const isLoggedIn=()=>{
        let data=localStorage.getItem("data");
        if(data!=null){
            return true;
        }
        else{
            return false;
        }
}

// doLogin=>
export const doLogin=(data , next)=>{
    localStorage.setItem("data", JSON.stringify(data));
    next();
}

//doLogOut=>
export const doLogOut = (next)=>{
    localStorage.removeItem("data");
    next();
}


//get currentUser

export const getCurrentUser = ()=>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"))?.user;
    }
    else{
        return undefined;
    }

}