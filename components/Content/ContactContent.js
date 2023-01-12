import { Text, Container, useTheme } from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { AiFillGithub } from "react-icons/ai";

export const ContactContent = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "navbar.contact" });
  const desc = intl.formatMessage({ id: "page.contact.desc" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const { type, isDark } = useTheme();

  return (
    <Container
      lg
      css={{
        minHeight: "44vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="animate__animated animate__fadeIn"
    >
      <Text
        h1
        css={{
          textGradient: "45deg, $yellow600 -20%, $blue600 100%",
          paddingBottom: 0,
          marginBottom: 0,
          fontSize: "$7xl",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
      <Text
        weight="500"
        size="$xl"
        css={{ lineHeight: "12px", textAlign: "center" }}
        color="$gray700"
      >
        {desc}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <a href="https://www.linkedin.com/in/nahuerodcast" target="_blank">
          <TiSocialLinkedin
            size="50px"
            color={`${isDark ? "white" : "black"}`}
          />
        </a>
        <a href="https://www.github.com/nahuerodcast" target="_blank">
          <AiFillGithub size="50px" color={`${isDark ? "white" : "black"}`} />
        </a>
        <a href="https://www.twitter.com/_nahuerod" target="_blank">
          <TiSocialTwitter
            size="50px"
            color={`${isDark ? "white" : "black"}`}
          />
        </a>
      </div>
    </Container>
  );
};
