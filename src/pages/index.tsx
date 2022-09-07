import { styled } from "../styles";

const Button = styled("button", {
  background: "$green500",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: 4,
});

export default function Home() {
  return <Button>Hello World!</Button>;
}
