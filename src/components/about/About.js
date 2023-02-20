import React from 'react'
import Button from '../button/Button'
import './about.css'
import { FaMedal, FaGrinStars } from 'react-icons/fa'
import { GiTrophyCup } from 'react-icons/gi'

const About = () => {
    return (
        <>
            <div className="homeAbout">
                <div className="heading">About me ?</div>
                <div className="homeAboutWrapper">
                    <div className='left'>
                        <p> Hi, Everyone I'm Deepak Kumar, a Tech-Enthusiast with a proper knowledge in Frontend Web developement and a learning phase in Backend Web Developement.</p><br/>
                        <p> I used to play with CSS and Components, I am exploring new things in web developement and going deep into Backend, so as to become a Full Stack Web developer. </p><br/>
                        <p> I also used to do a good level of graphic designing and UI/UX. </p><br/>
                        <a href="#proj"><Button value="Explore Works"></Button></a>
                    </div>
                    <div className="right">
                        <img src="img/aboutImg.jpeg" alt="" />
                    </div>
                </div>
                <div className="homeAboutMore">
                    <div className="aboutMore">
                        <FaMedal size={50}/>
                        <div className="text"><span>03+</span> Yrs Experience</div>
                    </div>
                    <div className="aboutMore">
                        <GiTrophyCup size={50}/>
                        <div className="text"><span>20+</span> Projects</div>
                    </div>
                    <div className="aboutMore">
                        <FaGrinStars size={50}/>
                        <div className="text"><span>08+</span> Happy Services</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About