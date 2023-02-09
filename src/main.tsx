import React from "react";
import ReactDOM from "react-dom/client";

const App = () => <h1>Hello, world!</h1>;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
