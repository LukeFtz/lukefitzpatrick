import "@/styles/globals.css";
import "@/styles/header/header.css";
import "@/styles/menu/menu.css";
import "@/styles/prototype/prototype.css";
import "@/styles/frontend/frontend.css";
import "@/styles/iot/iot.css";
import "@/styles/backend/backend.css";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
