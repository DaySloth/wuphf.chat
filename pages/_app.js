import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "next-auth/client";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
