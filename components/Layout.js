import { Box } from "./Box.js";
import {
  Navbar,
  Avatar,
  useTheme,
  Switch,
  Container,
  Text,
} from "@nextui-org/react";
import useDarkMode from "use-dark-mode";
import { useIntl } from "react-intl";
import Flag from "react-world-flags";
import { useRouter } from "next/router";
import { MoonIcon } from "../components/MoonIcon";
import { SunIcon } from "../components/SunIcon";
import NextLink from "next/link";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";
import Head from "next/head";

export const Layout = ({ children }) => {
  const darkMode = useDarkMode(false);
  const { isDark } = useTheme();
  const intl = useIntl();

  const aboutMe = intl.formatMessage({ id: "navbar.about-me" });
  const projects = intl.formatMessage({ id: "navbar.projects" });
  const experience = intl.formatMessage({ id: "navbar.experience" });
  const contact = intl.formatMessage({ id: "navbar.contact" });
  const developedBy = intl.formatMessage({ id: "footer.developed-by" });
  const developedByDesc = intl.formatMessage({
    id: "footer.developed-by.desc",
  });

  const { locale, locales, asPath, pathname } = useRouter();

  const handleScrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Box
      css={{
        maxW: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Head>
        <title>
          Nahue Rodcast{" "}
          {pathname === "/"
            ? ""
            : pathname.includes("projects")
            ? `- ${projects}`
            : pathname.includes("experience")
            ? `- ${experience}`
            : pathname.includes("contact") && `- ${contact}`}
        </title>
      </Head>
      <Navbar variant="sticky">
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Container
            css={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              maxWidth: "1200px",
              padding: 0,
            }}
          >
            <Navbar.Brand>
              <NextLink href="/" locale={locale}>
                <Text
                  h4
                  css={{
                    marginRight: "4px",
                    cursor: "pointer",
                    marginBottom: 0,
                    fontWeight: "$semibold",
                    letterSpacing: "$tighter",
                  }}
                >
                  Nahue Rodcast
                </Text>
              </NextLink>
            </Navbar.Brand>
            <Navbar.Content
              hideIn="xs"
              variant="highlight-rounded"
              activeColor="secondary"
              css={{ fontSize: "$md" }}
            >
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
                          cursor: "pointer",
                        }}
                      >
                        <Flag code={loc === "es" ? "arg" : "usa"} height="16" />
                      </div>
                    </NextLink>
                  )
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/nahuerodcast"
                  target="_blank"
                >
                  <TiSocialLinkedin
                    size="28px"
                    color={`${isDark ? "white" : "black"}`}
                  />
                </a>
                <a href="https://www.github.com/nahuerodcast" target="_blank">
                  <AiFillGithub
                    size="28px"
                    color={`${isDark ? "white" : "black"}`}
                  />
                </a>
                <a href="https://www.twitter.com/_nahuerod" target="_blank">
                  <TiSocialTwitter
                    size="28px"
                    color={`${isDark ? "white" : "black"}`}
                  />
                </a>
              </div>
            </Navbar.Content>
          </Container>
        </div>
      </Navbar>
      <div className={isDark ? "mainAnimation" : "lightAnimation"}>
        {children}
      </div>
      <Navbar>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "1200px",
            }}
          >
            <Navbar.Brand>
              <Avatar
                css={{ marginRight: "12px" }}
                src="https://portfolio-nahue-rodcast.vercel.app/profile-pic.jpg"
                size="sm"
              />
              <Text
                onClick={handleScrollTo}
                css={{ marginRight: "4px", cursor: "pointer" }}
              >
                Nahue Rodcast
              </Text>
            </Navbar.Brand>
            <Navbar.Content
              hideIn="xs"
              css={{ letterSpacing: "tighter" }}
              variant="highlight-rounded"
            >
              <div>
                <Text
                  css={{
                    letterSpacing: "tight",
                    fontWeight: "$semibold",
                  }}
                >
                  {developedBy}
                </Text>
                <Text
                  css={{
                    letterSpacing: "tight",
                    lineHeight: "10px",
                    fontWeight: "$normal",
                    textAlign: "right",
                  }}
                  h6
                >
                  {developedByDesc}
                </Text>
              </div>
            </Navbar.Content>
          </div>
        </div>
      </Navbar>
    </Box>
  );
};
