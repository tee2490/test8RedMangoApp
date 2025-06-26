import { createRoot } from 'react-dom/client'
import App from './Container/App.tsx'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')!).render(
    <App />
)
