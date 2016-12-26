import api from '../api'
import { USER_SIGNIN,USER_SIGNOUT,USER_REG } from './types'

export const UserLogin =({ commit }, data) =>{
    api.localLogin(data).then(function (response){
        if (response.data.type == true){
            commit(USER_SIGNIN, response.data.token);
            return;
            Window.location = '/index'
        }else{
            return;
            Window.location = '/login'
        }
    })
    .catch(function (error){
        console.log(error);
    });
};

export const UserLogout = ({ commit },data) =>{
    api.localLogout(data).then(function(){
        commit(USER_SIGNOUT);
        window.location = '/login'
    })
    .catch(function(error){
        console.log(error)
    })
}

export const UserReg = ({commit}, data) => {
    api.localReg(data).then(function(response){
        if( response.data.type == true){
            commit(USER_REG, response.data.token);
            Window.location='/index'
        }
    })
    .catch(function(error){
        console.log(error)
    })
}
