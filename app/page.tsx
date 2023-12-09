import Container from '../components/container'
import Header from '../components/header'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <About />
        {/* <Footer /> */}
      </Container>
    </>
  )
}
