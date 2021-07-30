import Cookies from 'js-cookie';
import { Redirect } from "@reach/router";

 const onlyNotLogUser = function (WrappedComponent){

    const Logout = function () {
        if(Cookies.get("isUserLogged")){
            return <Redirect to="/description" noThrow />
        }else{
           return <WrappedComponent/> 
        }
    };
    return Logout;
  }
  export default onlyNotLogUser;