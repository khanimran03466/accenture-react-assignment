import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 2,
        title: "Lorem ipsum dolor",
        descrip: "sit amet, consectetur adipisicing elit. Ex iusto deserunt inventore tempore. Repudiandae aspernatur, rem ipsum ab dolor velit.",
        author: "- Gaurav"
    }
]

const NewTodoSlice = createSlice({
    name: "newTodo",
    initialState: initialState,
    reducers: {

        addNewData: (state, action) => { 
            const newData = {
                id: (~~(Math.random() * 1000)),
                title: action.payload.title,
                descrip: action.payload.descrip,
                author: action.payload.author
            }
            state = state.unshift(newData);

        },


        deleteData: (state, action) => {

            state = state.filter((item) => {
                return item.id !== action.payload.id
            })

            return state;

        },

        updateData: (state, action) => {
            const index = state.findIndex(blog => blog.id === action.payload.id)
            state[index] = action.payload

        }
    }
});



const popupSlice = createSlice({
    name: "modal",
    initialState: false,
    reducers: {
        modalOpen: (state) => {
            return state = true
        },
        modalClose: (state) => {
            return state = !state
        },
    }
});


const updatePopupSlice = createSlice({
    name: "updateModal",
    initialState: false,
    reducers: {
        updateModalOpen: (state) => {
            state = true
            return state
        },
        updateModalClose: (state) => {
            state = false
            return state
        },
    }
});



const TodoStore = configureStore({
    reducer: {
        newTodo: NewTodoSlice.reducer,
        modal: popupSlice.reducer,
        updateModal: updatePopupSlice.reducer
    }
});

export const NewTodosAction = NewTodoSlice.actions;
export const modalPopupAction = popupSlice.actions;
export const updatePopupSliceAction = updatePopupSlice.actions;
export default TodoStore;


