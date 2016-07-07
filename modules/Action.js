import {GET} from './App'
/*export function receiveSubMenus(){
    console.log("aa");
    return {
        type: GET,
        data:[
            {url: 'u1', title: 't11'},
            {url: 'u2', title: 't21'}
        ]
    };
}*/
export const USER_LOGIN = 'USER_LOGIN';
export function receiveSubMenus(){
    return (dispatch, getState) => {
        let {userId, password} = getState();
        userId = "1";
        password = "111111";
        var formData = new FormData();
        formData.append('userId', userId);
        formData.append('password', password);
        return fetch('/login', {
            method: 'POST',
            body: formData})
            .then(res => res.json())
            .then(json => dispatch(receiveResult(json)))
    }
}

export function receiveResult(result){
    return {
        type: GET,
        loginUser: result.data
    }
}