import {
  Text,
  Spacer,
  Container,
  Card,
  Button,
  useTheme,
  Grid,
} from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { useRef, useState } from "react";
import Image from "next/image";
import reactLogo from "../../public/media/react-logo.png";
import nextjsLogo from "../../public/media/nextjs-logo.png";
import rnlogo from "../../public/media/rn-logo.png";
import reduxLogo from "../../public/media/redux-logo.png";
import reduxSagaLogo from "../../public/media/redux-saga-logo.png";
import axiosLogo from "../../public/media/axios-logo.png";
import tsLogo from "../../public/media/ts-logo.png";
import jsLogo from "../../public/media/js-logo.png";
import figmaLogo from "../../public/media/figma-logo.png";

const stackImgs = [
  { id: 1, name: "React", src: reactLogo },
  { id: 2, name: "Next-JS", src: nextjsLogo },
  { id: 3, name: "React Native", src: rnlogo },
  { id: 4, name: "Redux", src: reduxLogo },
  { id: 5, name: "Redux Saga", src: reduxSagaLogo },
  { id: 6, name: "Axios", src: axiosLogo },
  { id: 7, name: "Typescript", src: tsLogo },
  { id: 8, name: "Javascript ES6", src: jsLogo },
  { id: 9, name: "Figma", src: figmaLogo },
];

export const HomeContent = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.title" });
  const desc = intl.formatMessage({ id: "page.home.description" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const stack = intl.formatMessage({ id: "page.home.stack" });
  const stackDesc = intl.formatMessage({ id: "page.home.stack.desc" });
  const aboutMeTitle = intl.formatMessage({ id: "page.home.about-me.title" });
  const aboutMeDesc = intl.formatMessage({ id: "page.home.about-me.desc" });
  const downloadCV = intl.formatMessage({ id: "page.home.download-cv" });

  const { type, isDark } = useTheme();
  const ref = useRef(null);
  const ref2 = useRef(null);

  console.log(ref2.current);

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
          <Container css={{ padding: 0 }}>
            <Text
              h1
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                paddingBottom: 0,
                marginBottom: 0,
                fontSize: "$7xl",
                lineHeight: "$xs",
                width: "70%",
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
                normalShadow: "$accents6",
                marginTop: "24px",
                color: "$accents0",
              }}
              onClick={() => {
                setShowMoreTransition(true);
                ref.current.scrollIntoView({
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
            height: "100vh",
          }}
          ref={ref}
        >
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <Text
                h1
                css={{
                  textGradient:
                    "to right, rgb(74, 222, 128) -20%, rgb(6, 182, 212) 50%",
                  paddingBottom: 0,
                  marginBottom: 0,
                  fontSize: "$7xl",
                }}
              >
                {stack}
              </Text>
            </div>
            <Text
              weight="500"
              size="$xl"
              css={{
                w: "65%",
                lineHeight: "24px",
                textAlign: "center",
                marginBottom: "48px",
              }}
              color="$gray700"
              textAlign="center"
            >
              {stackDesc}
            </Text>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "70%",
                justifyContent: "center",
              }}
            >
              {stackImgs.map((stckimg, id) => {
                return (
                  <a
                    style={{
                      position: "relative",
                      width: "180px",
                      height: "90px",
                    }}
                    className="stackLogos"
                    href={`https://www.google.com.ar/search?q=${stckimg.name}`}
                    target="_blank"
                    key={id}
                  >
                    <Image
                      alt={stckimg.name}
                      src={stckimg.src}
                      layout="fill"
                      objectFit="contain"
                      draggable="false"
                    />
                  </a>
                );
              })}
            </div>

            <Spacer y={1} />
            {/* <Button
              shadow
              css={{
                backgroundColor: "$accents9",
                normalShadow: "$accents6",
                marginTop: "24px",
                color: "$accents0",
              }}
              onClick={() => {
                setShowMoreTransition(true);
                ref2.current.scrollIntoView({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              {showMore}
            </Button> */}
          </Container>
        </div>
        <div
          style={{
            height: "50vh",
          }}
          ref={ref2}
        >
          <Container
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <Text
                h1
                css={{
                  textGradient: "45deg, $pink600 10%, $red600 80%",
                  paddingBottom: 0,
                  marginBottom: 0,
                  fontSize: "$7xl",
                }}
              >
                {aboutMeTitle}
              </Text>
            </div>
            <Text
              weight="500"
              size="$xl"
              css={{
                w: "85%",
                lineHeight: "24px",
                textAlign: "center",
                marginBottom: "12px",
              }}
              color="$gray700"
              textAlign="center"
            >
              {aboutMeDesc}
            </Text>
            <Spacer y={1} />
            <a href="../../public/media/rodriguez-casco-nahuel.pdf" download>
              <Button
                shadow
                css={{
                  backgroundColor: "$accents9",
                  normalShadow: "$accents6",
                  color: "$accents0",
                  marginBottom: "48px",
                }}
              >
                {downloadCV}
              </Button>
            </a>
          </Container>
        </div>
      </Container>
    </Container>
  );
};
