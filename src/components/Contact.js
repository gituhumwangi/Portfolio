import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h3sjtor', 'template_3ig7pcp', form.current, 'Bf-KYca9mTkf-PKnLNyvC')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                alert('Email Sent')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactSection'>
            <h2 className='title'>Contact Me</h2>
            <span className='contactDesc'>Fill the form below if you want to reach me.</span>
            <form className='inputs' ref={form} onSubmit={sendEmail}>
                <input className='name' name='your_name' placeholder='Your name' type='text' />
                <br />
                <input className='email' name='your_email' placeholder='Your email' type='email' />
                <br />
                <textarea className='message' rows='5' type='text' placeholder='Your message' name='message' />
                <br></br>
                <button className='btn' type='submit' value='send'>Submit</button>
            </form>

            <div className='links'>
                <img src='https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10796.jpg?w=360'
                    alt='twitter' className='socialImage' />
                <img src='https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png'
                    alt='instagram' className='socialImage' />
                <img src='https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png'
                    alt='github' className='socialImage' />
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                    alt='inkedIn' className='socialImage' />
            </div>

        </section>
    )
}

export default Contact