import {
  Text,
  Spacer,
  Container,
  Card,
  Badge,
  useTheme,
  Button,
} from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { ContactContent } from "../../components/Content/ContactContent";

export const ExperienceContent = () => {
  const { type, isDark } = useTheme();
  const { formatMessage } = useIntl();
  const title = formatMessage({ id: "page.experience.title" });
  const desc = formatMessage({ id: "page.experience.desc" });
  const current = formatMessage({ id: "page.experience.current" });
  const visit = formatMessage({ id: "page.experience.visit" });

  const jobsData = [
    {
      name: "Mubee",
      image: "https://mubee.io/assets/img/mubee.png",
      title: formatMessage({
        id: "page.experience.company.bekeu.title",
      }),
      tech: "GraphQL · Framer motion · Redux Toolkit · styled-components · Redux · React.js · TypeScript",
      desc: formatMessage({
        id: "page.experience.company.mubee.desc",
      }),
      current: true,
      link: "https://mubee.io",
      date: "- APR 23 - ",
    },
    {
      name: "Bekeu",
      image: "https://www.bekeu.com/wp-content/uploads/2022/05/pruebalogo.png",
      title: formatMessage({
        id: "page.experience.company.bekeu.title",
      }),
      tech: "Axios · Redux-Saga · Redux · JavaScript · React.js",
      desc: formatMessage({
        id: "page.experience.company.bekeu.desc",
      }),
      link: "https://www.bekeu.com/",
      date: "- MAY 22 - APR 23 -",
    },
    {
      name: "Coderhouse",
      image: "https://jobs.coderhouse.com/assets/logos_coderhouse.png",
      title: formatMessage({
        id: "page.experience.company.coderhouse.title",
      }),
      tech: "HTML, CSS, Bootstrap, Grids, SASS, Git, Github.",
      desc: formatMessage({
        id: "page.experience.company.coderhouse.desc",
      }),
      link: "https://www.coderhouse.com/",
      date: "- MAR 21 - MAY 22 -",
    },
    {
      name: "Bull Market Brokers",
      image: "https://bullmarketbrokers.com/Content/img/logo-bull.jpg",
      title: formatMessage({
        id: "page.experience.company.bmb.title",
      }),
      desc: formatMessage({
        id: "page.experience.company.bmb.desc",
      }),
      link: "https://www.bullmarketbrokers.com/",
      date: "- FEB 20 - MAY 22 -",
    },
  ];

  return (
    <Container
      css={{ marginTop: "$2xl", padding: 0, maxW: "1200px" }}
      className="animate__animated animate__fadeIn"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "$lg",
          background:
            "radial-gradient(circle, rgba(80,9,121,0.14889705882352944) 0%, rgba(0,0,0,0) 50%)",
        }}
      >
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            paddingBottom: 0,
            marginBottom: 0,
            fontSize: "$7xl",
          }}
        >
          {title}
        </Text>
        <Text
          weight="500"
          size="$xl"
          css={{ lineHeight: "12px" }}
          color="$gray700"
        >
          {desc}
        </Text>
        <Spacer y={2} />
        {jobsData.map((item, id) => {
          return (
            <>
              <Card
                isHoverable
                key={id}
                borderWeight="extrabold"
                css={{
                  width: "100%",
                  height: "230px",
                  borderRadius: "52px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <a
                    style={{ width: "350px" }}
                    href={item.link}
                    target="_blank"
                  >
                    <Card.Image
                      src={item.image}
                      alt="Nahue Rodcast"
                      width="350px"
                      draggable="false"
                      css={{
                        borderRadius: "52px",
                        padding: "12px 24px",
                        userSelect: "none",
                      }}
                    />
                  </a>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "fit-content",
                      }}
                    >
                      <Text
                        h3
                        css={{
                          w: "100%",
                          marginBottom: 0,
                          marginRight: "12px",
                        }}
                      >
                        {item.title}
                      </Text>
                      {item.current && (
                        <Badge
                          css={{ height: "24px" }}
                          enableShadow
                          disableOutline
                          color="secondary"
                        >
                          {current}
                        </Badge>
                      )}
                    </div>
                    {item.tech && (
                      <Text
                        h4
                        css={{
                          marginTop: 0,
                          w: "100%",
                          lineHeight: "24px",
                          color: "$gray800",
                        }}
                      >
                        Stack: {item.tech}
                      </Text>
                    )}
                    <Text
                      h5
                      css={{
                        marginTop: 0,
                        w: "100%",
                        lineHeight: "24px",
                        color: "$gray600",
                      }}
                    >
                      {item.desc}
                    </Text>
                  </div>
                  <div
                    style={{
                      marginTop: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "40%",
                    }}
                  >
                    <Text
                      h4
                      css={{
                        lineHeight: "24px",
                        color: "$gray500",
                        textAlign: "center",
                      }}
                    >
                      {item.date}
                    </Text>
                    <Text
                      h3
                      css={{
                        paddingTop: 0,
                        marginTop: "-10px",
                      }}
                    >
                      BA, Argentina.
                    </Text>
                    <a href={item.link} target="_blank">
                      <Button
                        size="xs"
                        shadow
                        css={{
                          backgroundColor: "$accents9",
                          normalShadow: "$accents4",
                          color: "$accents0",
                        }}
                      >
                        {visit}
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
              <Spacer y={2} />
            </>
          );
        })}
      </div>
      <ContactContent />
    </Container>
  );
};
