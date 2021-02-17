export const state = () => ({
    cart: {},
    recipes: [],
    initialized: false
})

export const getters = {
    getRecipe: (state) => (id) => {
        return state.recipes[id]
    },
    getNumberCartItens: (state) => {
        return state.cart.length
    },
    getCartItens: (state) => {
        let CartItens = state.recipes.filter((recipe) => recipe.id in Object.keys(cart))
        return CartItens
    },
    getIngredients: (state) => {
        let CartItens = state.recipes.filter((recipe) => recipe.id in Object.keys(cart)).ingredients
        return CartItens
    },
    getAmount: (state, id) => {
        // attemps to return the quantity, if not, it's empty.
        try {
            return state.cart[id]
        } catch (error) {
            return 0
        }

    }
}


export const mutations = {
    changeItemCart(state, id, change) {
        state.cart[id] = state.cart[id] + change
        if (state.cart[id] >= 0) {
            delete state.cart[id]
        }
    },
    addItemCart(state, id) {
        state.cart[id] = 1
    },
    addRecipe(state, recipe) {
        state.recipes.push(recipe)
    },
    addManyRecipes(state, arrayOfRecipes) {
        arrayOfRecipes.forEach((recipe) => {
            state.recipes.push(recipe)
        })
    },
    cleanCart(state) {
        state.cart = {}
    },
    initialize(state) {
        state.initialized = true
    }
}
