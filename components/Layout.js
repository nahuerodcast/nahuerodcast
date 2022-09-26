import { Box } from "./Box.js";
import {
  Navbar,
  Button,
  Link,
  Text,
  Avatar,
  useTheme,
  Switch
} from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { useIntl } from "react-intl";
import Flag from "react-world-flags";
import { useState } from "react";
import { useRouter } from "next/router";
import { MoonIcon } from "../components/MoonIcon";
import { SunIcon } from "../components/SunIcon";

export const Layout = ({ children }) => {
  const [flag, setFlag] = useState(false);
  const darkMode = useDarkMode(false);
  const { type, isDark } = useTheme();
  const intl = useIntl();
  const aboutMe = intl.formatMessage({ id: "navbar.about-me" });
  const projects = intl.formatMessage({ id: "navbar.projects" });
  const experience = intl.formatMessage({ id: "navbar.experience" });
  const contact = intl.formatMessage({ id: "navbar.contact" });

  const { locale, locales, asPath } = useRouter();

  console.log(locales);

  return (
    <Box
      css={{
        maxW: "100%"
      }}
    >
      <Navbar variant="sticky" maxWidth={"lg"}>
        <Navbar.Brand>
          <Avatar
            css={{ marginRight: "12px" }}
            src="https://portfolio-nahue-rodcast.vercel.app/profile-pic.jpg"
            size="sm"
          />
          <Text css={{ marginRight: "4px" }}> Nahue Rodcast </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight">
          <Navbar.Link isActive href="#">
            {aboutMe}
          </Navbar.Link>
          <Navbar.Link href={`${locale}/projects`}>{projects}</Navbar.Link>
          <Navbar.Link href={`${locale}/experience`}>{experience}</Navbar.Link>
          <Navbar.Link href={`${locale}/contact`}>{contact}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            checked={darkMode.value}
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={() => darkMode.toggle()}
          />
          {[...locales].sort().map((asd) => (
            <Link key={asd} href={`/${asd}${asPath}`} locale={locale}>
              <Flag code={asd === "es" ? "arg" : "usa"} height="16" />
            </Link>
          ))}
        </Navbar.Content>
      </Navbar>
      {children}
    </Box>
  );
};
