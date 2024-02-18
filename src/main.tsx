import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Utilities
import Providers from './providers/providers.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Providers>
        <App />
      </Providers>
    </Provider>
  </React.StrictMode>,
)
