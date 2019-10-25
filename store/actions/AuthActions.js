import { ACTION_REGISTER, ACTION_LOGIN } from '../../constants/Actions'

export const register = () => {
    return { type: ACTION_REGISTER }
}

export const login = (credentials) => {
    return (dispatch) => {
        console.log(dispatch, credentials)
        dispatch({type: ACTION_LOGIN, token: "13asjdasi3889==-;][];."});
    }
}