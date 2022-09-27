import { Box } from "./Box.js";
import {
  Navbar,
  Button,
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
import NextLink from "next/link";

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

  console.log("this is locale", asPath);

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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
          <NextLink href="/" locale={locale}>
            <Text css={{ marginRight: "4px", cursor: "pointer" }}>
              {" "}
              Nahue Rodcast{" "}
            </Text>
          </NextLink>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <NextLink href={`/`} locale={locale}>
            <Navbar.Link isActive={asPath === "/"}>{aboutMe}</Navbar.Link>
          </NextLink>
          <NextLink href={`/projects`} locale={locale}>
            <Navbar.Link isActive={asPath.includes("projects")}>
              {projects}
            </Navbar.Link>
          </NextLink>
          <NextLink href={`/experience`} locale={locale}>
            <Navbar.Link isActive={asPath.includes("experience")}>
              {experience}
            </Navbar.Link>
          </NextLink>
          <NextLink href={`/contact`} locale={locale}>
            <Navbar.Link isActive={asPath.includes("contact")}>
              {contact}
            </Navbar.Link>
          </NextLink>
        </Navbar.Content>
        <Navbar.Content>
          <Switch
            checked={darkMode.value}
            shadow
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={() => darkMode.toggle()}
          />
          {[...locales].sort().map(
            (loc, id) =>
              !locale.includes(loc) && (
                <NextLink key={id} href={asPath} locale={loc}>
                  <div
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <Flag code={loc === "es" ? "arg" : "usa"} height="16" />
                  </div>
                </NextLink>
              )
          )}
        </Navbar.Content>
      </Navbar>
      <div>{children}</div>
    </Box>
  );
};
