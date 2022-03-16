import "@testing-library/jest-dom"
import { types } from "../../types/types"

describe("verificar types", () => {
    test('comparar objetos', () => {
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })
    test('comparar objetos', () => {
        expect(types).not.toEqual({
            login: 'logeado',
            logout: 'deslogeado',
            register: 'registrar'
        })
    })

})