import { Container, Text } from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "../Card";
import { ContactContent } from "../../components/Content/ContactContent";
import AOS from "aos";
import "aos/dist/aos.css";

export const ProjectsContent = ({ data }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.projects.title" });
  const desc = intl.formatMessage({ id: "page.projects.desc" });
  const [repos, setRepos] = useState([]);

  const username = "nahuerodcast";
  const fetchRepos = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=author-date-asc`
      );
      setRepos(res.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchRepos();
    AOS.init();
  }, []);

  return (
    <Container
      css={{
        marginTop: "$3xl",
        minHeight: "100vh",
        maxW: "1200px",
        padding: 0,
      }}
      className={`animate__animated animate__fadeIn`}
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-duration="1000"
    >
      <Text
        h1
        css={{
          textGradient: "45deg, $red600 -20%, $purple600 100%",
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
      <Container
        css={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          marginTop: "44px",
          gap: "24px",
          padding: 0,
          marginBottom: "24px",
        }}
      >
        {repos.map((repo, id) => (
          <RepoCard
            repo={repo}
            key={id}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1000"
          />
        ))}
      </Container>
    </Container>
  );
};
