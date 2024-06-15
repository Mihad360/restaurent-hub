import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-100">
      <div className="max-w-full mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  </React.StrictMode>
);
