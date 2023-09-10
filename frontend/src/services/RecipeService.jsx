import $api from "../http";


export default class RecipeService {
    static async getAll() {
        return $api.get('/recipes')
    }

    static async getOne(id) {
        return $api.get(`/recipes/${id}`)
    }

    static async getMyRecipes() {
        return $api.get(`/users/me/recipes`)
    }

    static async getMyFavouriteRecipes(user_id) {
        return $api.get(`/favourite/me`)
    }
}
