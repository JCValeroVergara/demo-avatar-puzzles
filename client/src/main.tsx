import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { AvatarProvider } from './common/index.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AvatarProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </AvatarProvider>
    </StrictMode>
);
