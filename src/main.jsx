import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './fonts/SourceSansPro.ttf'
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux"
import { store } from "./app/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
