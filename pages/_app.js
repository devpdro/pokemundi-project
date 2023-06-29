import Global from "@/styles/Global.scss";

import RepeatComponent from "@/components/RepeatComponent";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <RepeatComponent>
        <Component {...pageProps} />
      </RepeatComponent>
    </main>
  );
}

export default MyApp;
