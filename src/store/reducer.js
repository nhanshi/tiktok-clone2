import { SET_TODO_INPUT, ADD_TODO } from './constants'


const initState = {
    todos: [], // khi bấm nút thêm công việc thì lưu vào mảng
    todoInput: '', // nhập nội dung công việc lưu vào đây
}

function reducer(state, action) {
    switch (action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            throw new Error(action.type);
    }
}

export { initState }
export default reducer



























