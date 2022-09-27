import {
  Text,
  Spacer,
  Container,
  Card,
  Button,
  useTheme
} from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";

export const HomeContent = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.title" });
  const desc = intl.formatMessage({ id: "page.home.description" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const { type, isDark } = useTheme();

  return (
    <Container
      lg
      css={{ marginTop: "$3xl", padding: 0 }}
      className="animate__animated animate__fadeIn"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          maxWidth: "$lg"
        }}
      >
        <Container>
          <Text
            h1
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              paddingBottom: 0,
              marginBottom: 0,
              fontSize: "$7xl"
            }}
          >
            {title}
          </Text>
          <Text
            h3
            css={{
              paddingTop: 0,
              marginTop: "-10px"
            }}
          >
            BA, Argentina.
          </Text>
          <Text
            weight="500"
            size="$xl"
            css={{ w: "65%", lineHeight: "24px" }}
            color="$gray700"
          >
            {desc}
          </Text>
          <Button
            shadow
            css={{
              backgroundColor: "$accents9",
              normalShadow: "$accents4",
              marginTop: "24px",
              color: "$accents0"
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
              })
            }
          >
            {showMore}
          </Button>
          <Spacer y={1} />
        </Container>
        <Card
          isHoverable
          borderWeight="extrabold"
          css={{
            width: "320px",
            height: "320px",
            borderRadius: "52px"
          }}
        >
          <Card.Image
            src="https://portfolio-nahue-rodcast.vercel.app/profile-pic.jpg"
            objectFit="cover"
            width="100%"
            height={500}
            alt="Nahue Rodcast"
          />
        </Card>
      </div>
    </Container>
  );
};
