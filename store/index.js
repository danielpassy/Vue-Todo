export const state = () => ({
    todos: [
        { description: "hiho", id: 0 },
        { description: "hiho", id: 1 },
        { description: "hiho", id: 2 },
    ],
    initialized: false
})

export const getters = {
    getTodos: (state) => {
        return state.todos
    },
    getTodo: (state) => (id) => {
        return state.todos.find(todo => todo.id == id)
    },
    isInitialized: (state) => {
        return state.initialized
    }
}


export const mutations = {
    initialize(state){
        state.initialized = true
    },
    addTodo(state, description) {
        // prevent same ID 

        let length = state.todos.length
        if (length != 0) {
            state.todos.push({
                description: description,
                id: state.todos[length - 1].id + 1
            })
        }
        else {
            state.todos.push({
                description: description,
                id: 0
            })
        }
    },
    addAPITodo(state, todo) {
        state.todos.push(todo)
    },
    delTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    }
}
