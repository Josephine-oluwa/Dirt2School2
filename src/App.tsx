import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { persistStore } from "redux-persist";
import { store } from "./global/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const persistor = persistStore(store);
const client = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={mainRouter} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
