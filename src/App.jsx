import { useState } from "react";
import "./App.css";
import NavBar from "./components/global/layout/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "./components/global/layout";
import HomePage from "./components/pages/home/index.JSX";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
    ]);

    const [count, setCount] = useState(0);

    return <RouterProvider router={router} />;
}

export default App;
