import { createTheme, NextUIProvider } from "@nextui-org/react";
import { IntlProvider } from "react-intl";
import useDarkMode from "use-dark-mode";
import { useRouter } from "next/router";
import es from "../lang/es.json";
import en from "../lang/en.json";
import "animate.css";
import "../styles/main.css";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import ScrollTopButton from "../components/ScrollTopButton";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: { colors: { darky: "#FFFFFF" } },
  });
  const darkMode = useDarkMode(false);
  const { locale, pathname } = useRouter();
  const messages = {
    es,
    en,
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <CustomCursor
          targets={[".link", "button"]}
          customClass="*"
          dimensions={30}
          fill={!darkMode.value ? "000000" : "#FFF"}
          smoothness={{
            movement: 0.2,
            scale: 0.1,
            opacity: 0.2,
          }}
          targetOpacity={0.8}
        />
        <Head>
          <link rel="shortcut icon" href="./public/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
        {/* <ScrollTopButton /> */}
      </NextUIProvider>
    </IntlProvider>
  );
}

export default MyApp;
