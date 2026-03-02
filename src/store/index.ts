import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import pricingReducer from './slices/pricingSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    pricing: pricingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
