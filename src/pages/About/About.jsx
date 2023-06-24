import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Library</h2>
            <p className='fs-17'>Llibrary, traditionally, collection of books used for reading or study, or the building or room in which such a collection is kept. The word derives from the Latin liber, “book,” whereas a Latinized Greek word, bibliotheca, is the origin of the word for library in German, Russian, and the Romance languages.From their historical beginnings as places to keep the business, legal, historical, and religious records of a civilization, libraries have emerged since the middle of the 20th century as a far-reaching body of information resources and services that do not even require a building..</p>
            <p className='fs-17'>Rapid developments in computers, telecommunications, and other technologies have made it possible to store and retrieve information in many different forms and from any place with a computer and a telephone connection.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
