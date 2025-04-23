import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {ToastContainer} from 'react-toastify'
import { CssBaseline } from '@mui/material'


createRoot(document.getElementById('root')).render(
    <StrictMode>
       
            <CssBaseline/>
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
