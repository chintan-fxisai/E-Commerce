import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {ToastContainer} from 'react-toastify'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="colored"/>
    </StrictMode>

)
