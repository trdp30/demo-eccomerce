import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authenticationApi } from 'services/authApi'
import { productApi } from 'services/productApi'

// function exampleMiddleware(storeAPI) {
//   return function wrapDispatch(next) {
//     return function handleAction(action) {
//       console.log("storeAPI", storeAPI)
//       console.log("next", next)
//       console.log("action", action)
//       // Do anything here: pass the action onwards with next(action),
//       // or restart the pipeline with storeAPI.dispatch(action)
//       // Can also use storeAPI.getState() here

//       return next(action)
//     }
//   }
// }

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware).concat(authenticationApi.middleware)
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
