import Vue from 'vue'
import { recipes } from '../helpers/apimock/recipes'

export const state = () => ({
    cart: {},
    recipes: [],
    initialized: false
})

export const getters = {
    getRecipe: (state) => (id) => {
        // get a recipe based on its ID
        return state.recipes.filter((recipe) => recipe.id == id)[0]
    },
    getCartRecipesQuantity: (state) => () => {
        // get number of different recipes on the Cart
        return Object.keys(state.cart).length
    },
    getCartPortionsQuantity: (state) => () => {
        // return the amount of portions on the cart
        return Object.values(state.cart).reduce((a, b) => a + Number(b), 0)
    },
    getCartRecipes: (state) => () => {
        // get recipes on the Cart
        let CartItens = state.recipes.filter((recipe) => Object.keys(state.cart).includes(String(recipe.id)))
        return CartItens
    },
    getIngredients: (state, getters) => () => {
        // get all ingredients on the Cart and their quantity
        // returns an array = [{ingredient.name: quantity }]


        //Make a copy of Recipes to avoid morphing state and get the total quantity 
        let cartRecipes = clone(getters.getCartRecipes())
        cartRecipes.map((recipe) => {
            recipe.ingredients.map((ingredient) => {
                ingredient.quantity = ingredient.quantity * getters.getCartRecipeQuantity(recipe.id)
            })
        })

        // create a list with all the ingredients required by each recipe
        let ingredientsList = []
        cartRecipes.map((recipe) => recipe.ingredients.map((ingredient) => {
            ingredientsList.push(ingredient)
        }))

        // Now, sum all ingredients
        // does not handle non numric values
        let ingredientsQuantity = {}
        ingredientsList.map(ingredient => {
            if (ingredient.name in ingredientsQuantity) {
                ingredientsQuantity[ingredient.name] += !isNaN(Number(ingredient.quantity)) ? Number(ingredient.quantity) : ''
            }
            else {
                ingredientsQuantity[ingredient.name] = !isNaN(Number(ingredient.quantity)) ? Number(ingredient.quantity) : 'Uma pitada'
            }
        })
        return ingredientsQuantity

        function clone(obj) {
            if (obj == null || typeof (obj) != 'object')
                return obj;
            var temp = new obj.constructor();
            for (var key in obj)
                temp[key] = clone(obj[key]);
            return temp;
        }
    },
    getCartRecipeQuantity: (state) => (id) => {
        // get amount of a recipe in the cart
        if (state.cart[id] !== undefined) {
            return state.cart[id]
        }
        return 0
    },
    getCart: (state) => () => {
        return state.cart
    }
}


export const mutations = {
    changeItemCart(state, payload) {
        const { id, newValue } = payload;
        // if undefined and increasing, add 1
        if (state.cart[id] === undefined) {
            if (newValue > 0) {
                Vue.set(state.cart, id, newValue)
            }
        }
        else {
            if (newValue > 0) {
                Vue.set(state.cart, id, newValue)
            } else {
                Vue.delete(state.cart, id)
            }
        }

    },

    addItemCart(state, id) {
        Vue.set(state.cart, id, 1)
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
        Vue.delete(state, cart, {})
    },
    initialize(state) {
        state.initialized = true
    }
}


export const actions = {
    async nuxtServerInit({ commit }) {
        let data = recipes;
        commit("addManyRecipes", data);
        commit("initialize");
    }
}