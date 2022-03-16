import "@testing-library/jest-dom"
import { loginSincrono, logoutSync } from "../../actions/actionLogin"
import { types } from "../../types/types"
describe("verificar acciones de login", () => {
    test('validar login local', () => {
        const id = "ABC123"
        const displayname = "Nombre de prueba"
        const loginAction = loginSincrono(id, displayname)
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                id,
                displayname
            }
        })
    })
    test('validar login local', () => {
        const id = "ABC123"
        const displayname = "Nombre de prueba"
        const loginAction = loginSincrono(id, displayname)
        expect(loginAction).not.toEqual({
            type: types.logins,
            payload: {
                id,
                displayname
            }
        })
    })
    test('cerrar sesion', () => {

        const logoutAction = logoutSync()
        expect(logoutAction).toEqual({
            type: types.logout
        })
    })
    test('cerrar sesion', () => {

        const logoutAction = logoutSync()
        expect(logoutAction).not.toEqual({
            type: types.logouts
        })
    })
})