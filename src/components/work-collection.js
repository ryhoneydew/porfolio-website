import React from 'react'
import Projects from './projects'
const WorkCollection = () => {
  return (
    <section
      id="my-work"
      className="section is-medium is-white has-text-centered"
    >
      <div className="container">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
          My Work
        </h1>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            <Projects />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkCollection
