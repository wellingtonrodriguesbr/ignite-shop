import Image from "next/future/image";
import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container, Header } from "../styles/pages/app";
import logoImg from "../../public/assets/Logo.svg";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
