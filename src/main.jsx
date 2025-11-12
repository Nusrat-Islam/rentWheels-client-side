import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import { ToastContainer } from 'react-toast';

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
 
)
