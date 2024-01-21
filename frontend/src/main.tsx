import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Wraps
import DataLayout from "./components/app/wrap/data.tsx";
// Providers
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <DataLayout>
          <App />
        </DataLayout>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
