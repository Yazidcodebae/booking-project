import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import HomePage from "./components/pages/home/index.JSX";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    );
}

export default App;
