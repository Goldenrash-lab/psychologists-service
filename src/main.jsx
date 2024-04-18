import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/psychologists-service/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
