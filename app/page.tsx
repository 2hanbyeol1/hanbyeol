import Container from '../components/common/container'
import Header from '../components/common/header'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects'

const headerItems = ['About', 'Skills', 'Projects', 'Career']

const sections: { id: string; node: React.ReactNode; isCentered: boolean }[] = [
  { id: 'about', node: <About />, isCentered: true },
  { id: 'skills', node: <Skills />, isCentered: true },
  { id: 'projects', node: <Projects />, isCentered: false },
  { id: 'career', node: <></>, isCentered: false },
]

export default function Home() {
  return (
    <>
      <Header headerItems={headerItems} />
      <Container>
        {sections.map((section) => {
          return (
            <div
              key={section.id}
              id={section.id}
              className={
                section.isCentered
                  ? 'flex flex-col justify-center pt-20 sm:pt-20 h-screen'
                  : 'py-24 sm:py-20'
              }
            >
              {section.node}
            </div>
          )
        })}
        {/* <Footer /> */}
      </Container>
    </>
  )
}
