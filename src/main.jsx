import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from './providers/Authprovider'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-100">
      <div>
        <QueryClientProvider client={queryClient}>
          <Authprovider>
            <RouterProvider router={router}></RouterProvider>
          </Authprovider>
        </QueryClientProvider>
      </div>
    </div>
  </React.StrictMode>
);
