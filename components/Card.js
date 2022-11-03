import { Container, Text, Card, Col, Button } from "@nextui-org/react";
import { AiFillGithub } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

const RepoCard = ({ repo }) => (
  <a href={repo.html_url} target={"_blank"}>
    <Card css={{ width: "250px" }} isHoverable isPressable>
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
          <Container css={{ padding: "6px" }}>
            <Text h4 color="white">
              {repo.name}
            </Text>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              {repo.description}
            </Text>
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
        src="https://nextui.org/images/card-example-4.jpeg"
        objectFit="cover"
        width="100%"
        height={340}
        alt="Card image background"
      />
    </Card>
  </a>
);

export default RepoCard;
