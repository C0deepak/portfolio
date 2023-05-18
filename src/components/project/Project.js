import React from 'react'
import './project.css'
import { FaLongArrowAltRight } from 'react-icons/fa'
import Card from './Card'

const Project = () => {
    return (
        <div className="homeProject">
            <div className="heading" id="proj">Some Works</div>
            <div className="projectWrapper">
                <div className="projectIntro">
                    <div className="top">
                        <p>Knowing Something doesn't mean you have knowledge of that.</p>
                        <p>But Doing something and Gaining Experince means that.</p>
                        <p>So Here I'm with some of my projects...</p>
                    </div>
                    <div className="bottom">
                        <div className="bLeft">Works <div className="arrow"><div className="icon"><FaLongArrowAltRight /></div></div></div>
                    </div>
                </div>
                <Card
                    class="active"
                    img="img/p1.png"
                    des="A React based website for songs and podcast like stuffs, to listen and download best of your songs at a single click. (The webiste is also designed by me)"
                    link="https://dbrosraaga.netlify.app/"
                >
                </Card>
                <Card
                    class="noActive"
                    img="img/p2.png"
                    des="A gym website for a Gym, where the Gym Owner can display its facilities and all the brandings."
                    link="https://radargym.netlify.app/"
                >
                </Card>
                <Card
                    class="noActive"
                    img="img/p3.png"
                    des="A crypto currency website where one can search for top coins and fetch all the datas regarding it.(The website is also designed by me)"
                    link="#"
                >
                </Card>
                <Card
                    class="noActive"
                    img="img/p4.png"
                    des="A Nextjs website for our college Tech fest, where one can see all the events in the fest and register in it."
                    link="https://tech-mahotsav.bitsindri.ac.in/"
                >
                </Card>
                <Card
                    class="noActive"
                    img="img/p5.png"
                    des="A Vanilla Javascript based TO-DO website to add your daily works and also you can edit and delete the card at any time.(Designed by self)"
                    link="https://c0deepak.github.io/keepNotes/"
                >
                </Card>
            </div>
        </div>
    )
}

export default Project
