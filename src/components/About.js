import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='skillssection'>
        <span className='skillTitle'>What do I </span>
        <br />
        <span className='skillDesc'>
        I am adept problem-solver with a full-stack skill set,driven by a passion for innovation and continuous learning.
        Let's build something extraordinary together! 
        </span>

        <div className='skillBars'>
            <div className='skillBar'>
                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' 
                alt='html' className='skillbarImg' />
                <div className='skillText'>
                <h2>HTML</h2>
                <p>I can create visually appealing and well-structured web interfaces using HTML for content structure </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' 
                alt='css' className='skillbarImg' />
                <div className='skillText'>
                <h2>CSS</h2>
                <p>Enables me to create seamless user experiences through a strong foundation in front-end development</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png' 
                alt='javascript' className='skillbarImg' />
                <div className='skillText'>
                <h2>Javascript</h2>
                <p>I have mastered JavaScript for crafting dynamic and interactive web experiences, <br />
                incorporating asynchronous features and<br />
                 real-time updates to enhance user engagement.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg' 
                alt='react' className='skillbarImg' />
                <div className='skillText'>
                <h2>React</h2>
                <p>Through its component-based architecture <br/>
                  I am able to build responsive and scalable single-page applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='https://banner2.cleanpng.com/20180712/yka/kisspng-professional-python-programmer-computer-programmin-python-logo-download-5b47725c1cc0d6.3474912915314089881178.jpg' 
                alt='python' className='skillbarImg' />
                <div className='skillText'>
                <h2>Python</h2>
                <p>Enables me to develop robust solutions across various domains,<br/>
                  including web development and artificial intelligence.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src='https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg' 
                alt='flask' className='skillbarImg' />
                <div className='skillText'>
                <h2>Flask</h2>
                <p>Experienced in leveraging Flask, a lightweight Python web framework,<br/>
                   to streamline the development of web applications.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About