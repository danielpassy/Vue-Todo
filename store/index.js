export const state = () => ({
    todos: [
        { description: "hiho", id: 0 },
        { description: "hiho", id: 1 },
        { description: "hiho", id: 2 },
    ]
})

export const getters = {
    getTodos: (state) => {
        return state.todos
    },
    getTodo: (state) => (id) => {
        return state.todos.find(todo => todo.id == id)
    }
}


export const mutations = {
    addTodo(state, description) {
        state.todos.push({
            description: description,
            id: state.todos.length
        })
    },
    delTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
    }
}
