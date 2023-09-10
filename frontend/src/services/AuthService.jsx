import $api from "../http";


export default class AuthService {
    static async login(login, password) {
        return $api.post('auth/login', { login, password })
    }
    static async registration(login, name, surename, password) {
        return $api.post('auth/registration', { login, name, surename, password })
    }
    static async logout() {
        return $api.post('auth/logout')
    }
}
