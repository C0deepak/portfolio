import React from 'react'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiMongodb, SiBootstrap, SiExpress, SiReact } from 'react-icons/si'
import Button from '../button/Button';
import './hero.css'

const Hero = () => {
    return (
        <>
            <div className="homeHero">
                <div className="heading heading1">hi everyone! i'm</div>
                <div className="heading heading2">deepak kumar</div>
                <div className="heading heading3">a web developer</div>

                <div className="resumeBtn">
                    <a href='https://drive.google.com/file/d/1ExJSkpqr46UFnPHYUzgS8sMb66Y59bLO/view?usp=sharing' target='_blank'><Button value="Download Resume"></Button></a>
                </div>

                <div className="heroIcons">
                    <div className="icon icon1"><IoLogoHtml5 /></div>
                    <div className="icon icon2"><IoLogoCss3 /></div>
                    <div className="icon icon3"><IoLogoJavascript /></div>
                    <div className="icon icon4"><IoLogoNodejs /></div>
                    <div className="icon icon5"><SiBootstrap /></div>
                    <div className="icon icon6"><SiMongodb /></div>
                    <div className="icon icon7"><SiExpress /></div>
                    <div className="icon icon8"><SiReact /></div>
                </div>
            </div>
        </>
    )
}

export default Hero