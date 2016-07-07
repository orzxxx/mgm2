
export const USER_LOGIN = 'USER_LOGIN';
export function login(){
    return (dispatch, getState) => {
        const {userId, password} = getState();
        return fetch(`/login`, {method: "POST", body: {userId:userId, passwd: password}})
            .then(response => response.json())
            .then(json => dispatch(receiveResult(json)))
    }
}

export function receiveResult(result){
    return {
        type: USER_LOGIN,
        loginUser: result.data
    }
}