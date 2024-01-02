import React from 'react'

import ScrollEvent from '@/components/common/scrollEvent'
import Container from '../components/common/container'
import Header from '../components/common/header'
import About from '../components/sections/about'
import Skills from '../components/sections/skills'
import Projects from '../components/sections/projects'
import Career from '../components/sections/carrer'

const headerItems = ['About', 'Skills', 'Projects', 'Career']

const sections: { id: string; node: React.ReactNode }[] = [
  { id: 'about', node: <About /> },
  { id: 'skills', node: <Skills /> },
  { id: 'projects', node: <Projects /> },
  { id: 'career', node: <Career /> },
]

export default function Home() {
  return (
    <>
      <ScrollEvent />
      <Header headerItems={headerItems} />
      <Container>
        {sections.map((section) => {
          return (
            <article
              key={section.id}
              id={section.id}
              className="pt-20 sm:pt-20 h-screen flex flex-col justify-center"
            >
              {section.node}
            </article>
          )
        })}
        {/* <Footer /> */}
      </Container>
    </>
  )
}
