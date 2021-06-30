import {
    createSlice
} from '@reduxjs/toolkit'

export const Slice = createSlice({
    name: 'list',
    initialState: {
        loading: false,
        url: [],
        search: "",
        count: 0,
        message: "",
        isAuthenticated: false || localStorage.getItem("token") != null,
        error: ""
    },
    reducers: {
        loading(state, action) {
            state.loading = action.payload
        },
        search(state, action) {
            state.search = action.payload
        },
        addLinkThunksuccess(state, action) {
            state.url = [...state.url, ...action.payload]
            state.count++
        },
        addLinkThunkfailure(state, action) {
            state.message = action.payload
        },
        removeLinkThunksuccess(state, action) {
            let list = state.url.filter((x) => {
                return x.id !== action.payload
            })
            state.url = list
            state.count--
        },
        removeLinkThunkfailure(state, action) {
            state.message = action.payload
        },
        getLinkThunksuccess(state, action) {
            state.url = action.payload
            state.count = action.payload.length
        },
        getLinkThunkfailure(state, action) {
            state.message = action.payload
        },
        loginsuccess(state, action){
            state.isAuthenticated = true
        },
        loginfail(state, action){
            state.error = action.payload
            console.log(state.error)
        },
        logout(state, action){
            state.isAuthenticated = false
        }
    }
})

export const {
    loading,
    addLinkThunksuccess,
    addLinkThunkfailure,
    removeLinkThunksuccess,
    removeLinkThunkfailure,
    getLinkThunksuccess,
    getLinkThunkfailure,
    search,
    loginsuccess,
    loginfail,
    logout
} = Slice.actions
export default Slice.reducer