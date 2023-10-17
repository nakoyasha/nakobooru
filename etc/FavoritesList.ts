import { createSlice, configureStore } from '@reduxjs/toolkit'
import { addFavourite, removeFavourite } from './actions/favourites'

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        value: []
    },
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        }
    }
})

export const favoritesStore = configureStore({
    reducer: favoritesSlice.reducer
})