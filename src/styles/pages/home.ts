import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("a", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(0,0,0,0.6)",
    padding: "2rem",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all .2s ease",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      color: "$green300",
      fontWeight: "bold",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0px)",
      opacity: 1,
    },
  },
});
