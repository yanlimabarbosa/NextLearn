import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

globalStyles()

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
