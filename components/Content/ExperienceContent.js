import {
  Text,
  Spacer,
  Container,
  Card,
  Badge,
  useTheme
} from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";

export const ExperienceContent = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.experience.title" });
  const current = intl.formatMessage({ id: "page.experience.current" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const { type, isDark } = useTheme();
  const bekeuTitle = intl.formatMessage({
    id: "page.experience.company.bekeu.title"
  });
  const bekeuDesc = intl.formatMessage({
    id: "page.experience.company.bekeu.desc"
  });

  const coderTitle = intl.formatMessage({
    id: "page.experience.company.coderhouse.title"
  });

  const coderDesc = intl.formatMessage({
    id: "page.experience.company.coderhouse.title"
  });

  const arr = [
    {
      id: 1,
      name: "Bekeu",
      image: "https://www.bekeu.com/wp-content/uploads/2022/05/pruebalogo.png",
      title: bekeuTitle,
      tech: "Axios · Redux-Saga · Redux · JavaScript · React.js",
      desc: bekeuDesc,
      current: true
    },
    {
      id: 2,
      name: "Coderhouse",
      image: "https://jobs.coderhouse.com/assets/logos_coderhouse.png",
      title: coderTitle,
      tech: "HTML, CSS, Bootstrap, Grids, SASS, Git, Github.",
      desc: coderDesc
    },
    {
      id: 3,
      name: "Bull Market Brokers",
      image: "https://bullmarketbrokers.com/Content/img/logo-bull.jpg",
      title: "Ssr. CX Analyst",
      tech: "",
      desc:
        "Trabajo en conjunto con desarrollo, tesorería, compliance, títulos, asesoría financiera, entre otros."
    }
  ];

  return (
    <Container
      lg
      css={{ marginTop: "$3xl", padding: 0 }}
      className="animate__animated animate__fadeIn"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "$lg"
        }}
      >
        <Text
          h1
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            paddingBottom: 0,
            marginBottom: 0,
            fontSize: "$8xl"
          }}
        >
          {title}
        </Text>

        <Spacer y={1} />
        {arr.map((item, id) => {
          return (
            <>
              <Card
                isHoverable
                key={id}
                borderWeight="extrabold"
                css={{
                  width: "100%",
                  height: "230px",
                  borderRadius: "52px"
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Card.Image
                    src={item.image}
                    alt="Nahue Rodcast"
                    width="350px"
                    draggable="false"
                    css={{
                      borderRadius: "52px",
                      padding: "12px 24px",
                      userSelect: "none"
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "fit-content"
                      }}
                    >
                      <Text
                        h3
                        css={{
                          w: "100%",
                          marginBottom: 0,
                          marginRight: "12px"
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

                    <Text
                      h4
                      css={{
                        marginTop: 0,
                        w: "100%",
                        lineHeight: "24px",
                        color: "$gray800"
                      }}
                    >
                      {item.tech && `Stack: ${item.tech}`}
                    </Text>
                    <Text
                      h5
                      css={{
                        marginTop: 0,
                        w: "100%",
                        lineHeight: "24px",
                        color: "$gray600"
                      }}
                    >
                      {item.desc}
                    </Text>
                  </div>
                </div>
              </Card>
              <Spacer y={2} />
            </>
          );
        })}
      </div>
    </Container>
  );
};
