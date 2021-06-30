import {
  configureStore
} from '@reduxjs/toolkit'
import listReducer from './reducer/listReducer'

export default configureStore({
  reducer: {
    list: listReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
}) 