import { Container, useTheme, Text, Grid } from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";
import { useEffect, useState } from "react";
import axios from "axios";
import RepoCard from "../Card";
import { ContactContent } from "../../components/Content/ContactContent";

export const ProjectsContent = ({ data }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.projects.title" });
  const desc = intl.formatMessage({ id: "page.projects.desc" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const { type, isDark } = useTheme();
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
  }, []);

  console.log(repos);

  return (
    <Container
      lg
      css={{ marginTop: "$3xl", minHeight: "100vh" }}
      className={`animate__animated animate__fadeIn`}
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
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "44px",
          gap: "24px",
          padding: 0,
          marginBottom: "24px",
        }}
      >
        {repos.map((repo, id) => (
          <RepoCard repo={repo} key={id} />
        ))}
      </Container>
      <ContactContent />
    </Container>
  );
};
