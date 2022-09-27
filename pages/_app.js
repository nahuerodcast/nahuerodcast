import { createTheme, NextUIProvider } from "@nextui-org/react";
import { IntlProvider } from "react-intl";
import useDarkMode from "use-dark-mode";
import { useRouter } from "next/router";
import es from "../lang/es.json";
import en from "../lang/en.json";
import "animate.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: "light",
    theme: {}
  });

  const darkTheme = createTheme({
    type: "dark",
    theme: { colors: { darky: "#FFFFFF" } }
  });
  const darkMode = useDarkMode(false);
  const { locale } = useRouter();
  const messages = {
    es,
    en
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </IntlProvider>
  );
}

export default MyApp;
