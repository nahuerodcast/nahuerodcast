import { Text, Spacer, Container, Card } from "@nextui-org/react";
import { useIntl } from "react-intl";
import { Box } from "./Box.js";
import Image from "next/image";
import imgSource from "../public/media/profile-pic.jpg";

export const HomeContent = () => {
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.title" });
  const desc = intl.formatMessage({ id: "page.home.description" });

  return (
    <Container lg css={{ marginTop: "$2xl" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "$lg",
        }}
      >
        <Container>
          <Text
            h1
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
              marginTop: "56px",
              paddingBottom: 0,
              marginBottom: 0,
              fontSize: "$7xl",
            }}
          >
            {title}
          </Text>
          <Text
            h3
            css={{
              // textGradient: "45deg, $cyan400 -20%, $blue600 50%",
              paddingTop: 0,
              marginTop: "-10px",
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
          <Spacer y={1} />
        </Container>
        <Card
          isHoverable
          borderWeight="extrabold"
          css={{
            width: "320px",
            height: "320px",
            borderRadius: "52px",
          }}
        >
          <Card.Image
            src="https://portfolio-nahue-rodcast.vercel.app/profile-pic.jpg"
            objectFit="cover"
            width="100%"
            height={500}
            alt="Card image background"
          />
        </Card>
      </div>
    </Container>
  );
};
