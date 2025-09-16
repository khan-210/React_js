import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click to visit google"
);

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {reactElement}
  </React.StrictMode>
);
