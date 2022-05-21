import React from 'react'
import 'App.css'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import theme from 'theme'
import Home from 'components/pages/home/Home'
import { Routes, Route, Outlet } from 'react-router-dom'
import Layout from 'components/Layout'
import Products from 'components/pages/products/Products'
import ProductDetails from 'components/pages/products/ProductDetails'
import Checkout from 'components/pages/checkout/Checkout'
import Cart from 'components/pages/cart/Cart'
import { Provider } from 'react-redux'
import { store } from 'store'

const cache = createCache({
  key: 'demo-ecommerce',
  prepend: true
})

function App() {
  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <StyledEngineProvider injectFirst>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/product" element={<Outlet />}>
                  <Route index element={<Products />} />
                  <Route path=":id" element={<ProductDetails />} />
                </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </StyledEngineProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App
