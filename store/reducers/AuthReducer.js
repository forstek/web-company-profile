import { ACTION_REGISTER, ACTION_LOGIN } from '../../constants/Actions'

const initState = {
    isLoggedIn : false,
    token : null
}

const AuthReducer = (state = initState, action) => {

    switch (action.type) {
        case ACTION_LOGIN :
            const newState = { ...state, isLoggedIn : true, token: action.token }
            return newState
        default : 
            return state
    }

}

export default AuthReducer