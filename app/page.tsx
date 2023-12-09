import Container from '../components/common/container'
import Header from '../components/common/header'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'

const sections = [<About />, <Skills />]

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        {sections.map((section) => {
          return section
        })}
        {/* <Footer /> */}
      </Container>
    </>
  )
}
