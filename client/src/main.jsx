import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./components/Router/Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='min-h-screen w-[100%] justify-center bg-amber-50 dark:bg-slate-800 dark:text-slate-400'>
          <Router/>
      </div>
  </React.StrictMode>
)
