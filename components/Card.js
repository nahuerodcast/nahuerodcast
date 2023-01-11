import { Container, Text, Card, Col, Button, Badge } from "@nextui-org/react";
import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

const RepoCard = ({ repo }) => {
  const [successImage, setSuccessImage] = useState(true);
  return (
    <a
      href={repo.html_url}
      target={"_blank"}
      className={`animate__animated animate__fadeIn`}
    >
      <Card css={{ width: "400px" }} isHoverable isPressable>
        <Card.Header
          css={{ position: "absolute", zIndex: 1, top: 5, height: "100%" }}
        >
          <Col
            css={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Container
              css={{
                padding: "6px",
                textShadow: "0px -1px 12px rgba(0,0,0,0.31)",
              }}
            >
              <Text
                h4
                color="white"
                size={24}
                css={{ textShadow: "0px -1px 12px rgba(0,0,0,0.31)" }}
              >
                {repo.name}
              </Text>
              <Text
                size={14}
                weight="bold"
                transform="uppercase"
                color="lightgray"
                css={{ marginBottom: "12px", lineHeight: "22px" }}
              >
                {repo.description}
              </Text>
              {repo.topics.map((i) => (
                <Badge
                  color="secondary"
                  variant="flat"
                  size="sm"
                  css={{ fontSize: "10px", marginRight: "4px" }}
                >
                  {i.toUpperCase()}
                </Badge>
              ))}
            </Container>
            <Container
              css={{
                padding: 0,
                marginBottom: "12px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "end",
                gap: "4px",
              }}
            >
              <a href={repo.html_url} target="_blank">
                <Button auto flat color="secondary">
                  <AiFillGithub />
                </Button>
              </a>
              {repo.homepage && (
                <a href={repo.homepage} target="_blank">
                  <Button auto flat color="secondary">
                    <HiExternalLink />
                  </Button>
                </a>
              )}
            </Container>
          </Col>
        </Card.Header>

        <Card.Image
          src={
            (successImage && `../media/portfolio-imgs/${repo.name}.png`) ||
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          onError={() => setSuccessImage(false)}
          objectFit="cover"
          width="100%"
          height={340}
          alt={repo.name}
          className="backgroundImageCard"
        />
      </Card>
    </a>
  );
};

export default RepoCard;
