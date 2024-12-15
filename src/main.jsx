import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom"
import router from './routers/routers.jsx'
import SnackbarProvider from './contexts/SnackbarContext.jsx'

/**
 * Custom modules
 */

/**
 * CSS link
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider >
  </StrictMode>,
);
