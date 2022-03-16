import "@testing-library/jest-dom"
import { loginReducer } from "../../Reducers/loginReducer"
import { types } from "../../types/types"
describe("Pruebas en LoginReducer", () => {
    test('debe realizar el login', () => {
        const initialState = {}
        const action = {
            type: types.login,
            payload: {
                id: "abc",
                displayname: "nombre"
            }
        };
        const state = loginReducer(initialState, action)
        expect(state).toEqual({
            id: "abc",
            name: "nombre"
        })
    })
    test(' /= debe realizar el login', () => {
        const initialState = {}
        const action = {
            type: types.login,
            payload: {
                id: "abc",
                displayName: "nombre"
            }
        };
        const state = loginReducer(initialState, action)
        expect(state).not.toEqual({
            id: "abcd",
            displayName: "nombres"
        })
    })
    test('logout', () => {
        const initialState = {
            id: "abc",
            name: "fer"
        }
        const action = {
            type: types.logout
        }
        const state = loginReducer(initialState, action)
        expect(state).toEqual({})
    })
    test('Estado por defecto', () => {
        const initialState = {
            id: "abc",
            name: "nombre de prueba"
        }
        const action = {
            type: types.Hola
        }
        const state = loginReducer(initialState, action)
        expect(state).toEqual(initialState)
    })


})