import React from 'react'
import './Landingpage.css'
import {Link} from 'react-scroll'

const Landingpage = () => {
  return (
    <section id='landingpage'>
        <div className='landingpageContent'>
            <span className='Hello'>Hello</span>
            <span className='landingpageText'>I'm <span className='introName'>Dennis</span><br/>Software Engineer</span>
            <p className='introParagraph'>
            I am results-oriented and highly motivated professional with 
            <br /> a proven track record in software
            development. <br/>
            Seeking a challenging position where I can leverage my skills in  <br />
            full-stack development,leadership, and problem-solving<br />
             to contribute to the success of a dynamic organization.
            </p>
            <Link>
            <button className='btn'>
                <img src='https://banner2.cleanpng.com/20180516/sxq/kisspng-computer-icons-briefcase-icon-design-suitcase-5afc608acc0ee7.1684765515264892268358.jpg' 
                alt='briefcase' className='briefcaseIcon'/> 
            Hire me 
            </button>
            </Link>
        </div>
        <img src='https://img.myloview.com/posters/computer-programmer-or-coder-concept-software-engineer-vector-round-icon-design-professional-uniform-symbol-on-white-background-labor-day-people-stock-illustration-character-occupations-sign-700-279615738.jpg' 
        alt='Profile' className='Profile'/>
    </section>
  )
}

export default Landingpage