import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ChevronUpCircle } from "react-iconly";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button
      shadow
      rounded
      flat
      className={`scrollTopButton animate__animated  ${
        visible ? `animate__fadeIn` : `animate__fadeOut`
      }`}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      auto
      css={{
        backgroundColor: "$accents9",
        normalShadow: "$accents6",
        marginTop: "24px",
        color: "$accents0",
      }}
    >
      <ChevronUpCircle set="bold" />
    </Button>
  );
};

export default ScrollTopButton;
