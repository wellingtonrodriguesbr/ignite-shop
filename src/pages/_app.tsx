import Image from "next/future/image";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container, Header } from "../styles/pages/app";
import logoImg from "../../public/assets/Logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
