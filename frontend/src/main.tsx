import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx';
export const authService=`http://localhost:5000`
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="626117148632-rotghgh623re33ru7i6fqohiv9f7piq6.apps.googleusercontent.com">
      <AppProvider>
      <App />
      </AppProvider>
      
      
      </GoogleOAuthProvider>
    
  </StrictMode>,
)
