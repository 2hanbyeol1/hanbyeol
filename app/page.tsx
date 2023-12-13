import Container from '../components/common/container'
import Header from '../components/common/header'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects'

const sections = [<About />, <Skills />, <Projects />]

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
