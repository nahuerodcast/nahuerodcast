import {
  Text,
  Spacer,
  Container,
  Card,
  Button,
  useTheme,
} from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { useRef, useState } from "react";

export const HomeContent = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.title" });
  const desc = intl.formatMessage({ id: "page.home.description" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const stack = intl.formatMessage({ id: "page.home.stack" });

  const { type, isDark } = useTheme();
  const ref = useRef(null);

  const [showMoreTransition, setShowMoreTransition] = useState(false);

  return (
    <Container
      css={{
        padding: 0,
      }}
      className={`animate__animated animate__fadeIn`}
    >
      <Container
        lg
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            minHeight: "80vh",
          }}
        >
          <Container>
            <Text
              h1
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                paddingBottom: 0,
                marginBottom: 0,
                fontSize: "$7xl",
                lineHeight: "$xs",
              }}
              className={`animate__animated animate__fadeInUp`}
            >
              {title}
            </Text>
            <Text
              h3
              css={{
                paddingTop: 0,
                marginTop: "8px",
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
                color: "$accents0",
              }}
              onClick={() => {
                setShowMoreTransition(true);
                ref.current.scrollIntoView({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {showMore}
            </Button>
            <Spacer y={1} />
          </Container>
          <Card
            isHoverable
            borderWeight="extrabold"
            css={{
              width: "400px",
              height: "320px",
              borderRadius: "52px",
            }}
          >
            <Card.Image
              src="https://portfolio-nahue-rodcast.vercel.app/profile-pic.jpg"
              objectFit="cover"
              height={500}
              alt="Nahue Rodcast"
              loading="lazy"
            />
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            minHeight: "80vh",
          }}
          ref={ref}
        >
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              minHeight: "80vh",
            }}
          >
            <Text
              h1
              css={{
                textGradient:
                  "to right, rgb(74, 222, 128) -20%, rgb(6, 182, 212) 50%",
                paddingBottom: 0,
                marginBottom: 0,
                fontSize: "$7xl",
                marginTop: "250px",
              }}
            >
              {stack}
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
            <Text
              weight="500"
              size="$xl"
              css={{ w: "65%", lineHeight: "24px", textAlign: "center" }}
              color="$gray700"
              textAlign="center"
            >
              {desc}
            </Text>
            <Button
              shadow
              css={{
                backgroundColor: "$accents9",
                normalShadow: "$accents4",
                marginTop: "24px",
                color: "$accents0",
              }}
              onClick={() => {
                setShowMoreTransition(true);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {showMore}
            </Button>
            <Spacer y={1} />
          </Container>
        </div>
      </Container>
    </Container>
  );
};
