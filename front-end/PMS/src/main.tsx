import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./components/Users.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='/users' element={<Users />} />
    </Routes>
</BrowserRouter>

)
