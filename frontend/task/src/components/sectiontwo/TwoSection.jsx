import React from 'react'
import "./twosection.css"
export const TwoSection = () => {
  return (
    <>
    <section className='about'>
        <div className="container">
            <div className="aboutSection">
            <div className="left-side">
                <h5>OUR STORY</h5>
                <h3>WELCOME</h3>
                <p className='onep'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className='twop'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <button>Learn More About Us</button>
            </div>
            <div className="right-side">
                <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt="" />
            </div>
            </div>
        </div>

    </section>
    </>
  )
}
