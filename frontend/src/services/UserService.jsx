import $api from "../http";


export default class UserService {
    static async getMe(login, password) {
        return $api.get('users/me')
    }
}
