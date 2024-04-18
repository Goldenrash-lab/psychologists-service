import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./helpers/firebase.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/psychologists-service/">
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
