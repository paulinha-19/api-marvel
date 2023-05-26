import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import { ChakraProvider } from "@chakra-ui/react";
import SearchProvider from "./context/Search/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <SearchProvider>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </SearchProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
