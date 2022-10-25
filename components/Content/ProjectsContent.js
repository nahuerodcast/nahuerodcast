import { Container, useTheme } from "@nextui-org/react";
import { useIntl } from "react-intl";
import "animate.css";

export const ProjectsContent = ({ data }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.title" });
  const desc = intl.formatMessage({ id: "page.home.description" });
  const showMore = intl.formatMessage({ id: "page.home.show-more" });
  const { type, isDark } = useTheme();

  return (
    <Container lg css={{ marginTop: "$3xl", padding: 0 }}>
      Projects content
    </Container>
  );
};
