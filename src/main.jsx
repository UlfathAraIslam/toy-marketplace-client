import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  Route,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider';
import ErrorPage from './pages/ErrorPage/ErrorPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      <Route path="*" element={<ErrorPage />} />
      </RouterProvider>
      
      </AuthProvider>
  </React.StrictMode>
)
