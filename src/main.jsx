import * as React from "react";
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={AppRouter} />
    </React.StrictMode>,
)
