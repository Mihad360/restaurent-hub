import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Authprovider from "./providers/Authprovider";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-gray-100 min-h-screen">
      <div>
        <QueryClientProvider client={queryClient}>
          <Authprovider>
            <HelmetProvider>
              <RouterProvider router={router}></RouterProvider>
            </HelmetProvider>
          </Authprovider>
        </QueryClientProvider>
      </div>
    </div>
  </React.StrictMode>
);
