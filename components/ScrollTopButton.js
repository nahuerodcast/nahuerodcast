import { Button } from "@nextui-org/react";
import { useState, useEffect, useCallback } from "react";
import { ChevronUpCircle } from "react-iconly";

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [axis, setAxis] = useState(false);
  const [window, setWindow] = useState("");

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

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    setWindow(window.scrollY);
  }, []);

  const [y, setY] = useState(window);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setAxis(true);
      } else if (y < window.scrollY) {
        setAxis(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <Button
      shadow
      rounded
      flat
      className={`scrollTopButton animate__animated  ${
        !axis ? `animate__fadeIn` : !visible && `animate__fadeOut`
      }`}
      onClick={scrollToTop}
      auto
      css={{
        backgroundColor: "$accents9",
        normalShadow: "$accents6",
        color: "$accents0",
      }}
    >
      <ChevronUpCircle set="broken" />
    </Button>
  );
};

export default ScrollTopButton;
