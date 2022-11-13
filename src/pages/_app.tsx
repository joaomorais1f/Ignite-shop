import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globa'
import LogoImg from '../assets/Logo.svg'
import { Container, Header } from '../styles/screen/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={LogoImg.src} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
