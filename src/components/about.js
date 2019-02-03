import React from 'react'
import Profile from './profile'

const About = () => {
  return (
    <section id="about" className="section is-medium has-text-centered">
      <div className="container">
        <div className="columns is-centered about-container">
          <Profile className="column profile-container is-12-mobile is-half-tablet is-one-third-desktop" />

          <div className="column is-three-fifths">
            <div className="section-title is-spaced is-12-mobile is-half-tablet is-half-desktop">
              <div>
                <div className="outerCircle" />
                <div className="innerCircle" />
              </div>
              <h1 className="title ">About Me</h1>
            </div>

            <h2 className="subtitle is-size-5-desktop">
              Before becoming a full-stack developer, i worked as fashion
              designer for 6 years. I’ve also done graphic design and logo
              design. After graduated from Fullstack Academy of code, I am
              pursuing the career as a full-stack developer.{' '}
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
