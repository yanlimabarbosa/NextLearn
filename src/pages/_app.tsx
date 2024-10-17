import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

globalStyles()

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"
import Image from "next/image"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
