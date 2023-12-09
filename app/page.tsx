import Container from '../components/common/container'
import Header from '../components/common/header'
import About from '../components/sections/about'

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
