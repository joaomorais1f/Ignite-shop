import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/globa'
import LogoImg from '../assets/Logo.svg'
import { Container, Header } from '../styles/screen/app'
import Image from 'next/image'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg.src} width={130} height={52} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
