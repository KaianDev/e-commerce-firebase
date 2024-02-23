/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Utilities
import Providers from './providers/providers.tsx'
import { Provider } from 'react-redux'
import { store, persistedStore } from './store/store.ts'
// @ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Providers>
          <App />
        </Providers>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
