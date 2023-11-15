// TodoReducer.js
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        return [...state, { task: action.payload, isComplete: false }];
        case 'TOGGLE_TODO':
        return state.map((todo, index) =>
            index === action.payload ? { ...todo, isComplete: !todo.isComplete } : todo
        );
        case 'REMOVE_TODO':
        return state.filter((todo, index) => index !== action.payload);
        default:
        return state;
    }
};

export default todoReducer;
