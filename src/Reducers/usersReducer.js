import { typesUser } from "../types/types";


const initialState = {
    users: []
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesUser.register:
            return {
                users: [action.payload]
            }
        case typesUser.list:
            return {
                users: [...action.payload]
            }
        case typesUser.delete:
            return {
                users: state.users.filter(emp => emp.correo !== action.payload)
            }
        case typesUser.busqueda:
            return {
                users: action.payload
            }
        default:
            return state;
    }
}
