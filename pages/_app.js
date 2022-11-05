import { Provider } from "react-redux";
import Layout from "../components/layer/Layout";
import store from "../store/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps, session }) {
  return (
    <Provider store={store}>
      <Layout>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
