import React from 'react'
import ReactDOM from 'react-dom/client'
import EthersContextProvider from './contexts/EthersContext/EthersContextProvider'
import CachedProfilesAndPostsContextProvider from "./contexts/CachedProfilesAndPostsContext/CachedProfilesAndPostsContextProvider";
import App from './App'
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CachedProfilesAndPostsContextProvider>
      <EthersContextProvider>
        <App />
        <ToastContainer
            style={{ cursor: "default" }}
            autoClose={15000}
            theme="colored"
            closeOnClick={false}
            pauseOnFocusLoss={false}
          />
      </EthersContextProvider>
    </CachedProfilesAndPostsContextProvider>
  </React.StrictMode>,
)

