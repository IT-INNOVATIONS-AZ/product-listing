import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Pages from "./pages";
import "./assets/style/style.scss";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="bg">
          <Pages />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
