import React, { useEffect } from 'react'
import gsap from 'gsap'
import Button from '../button/Button'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './work.css'

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
    useEffect(() => {
        let control = gsap.context(() => {
            gsap.set('.workGallery:not(:first-child)', { opacity: 0, scale: 0.5 })

            const animation = gsap.to('.workGallery:not(:first-child)', {
                opacity: 1, scale: 1, duration: 1, stagger: 1
            })

            ScrollTrigger.create({
                trigger: '.works',
                start: 'top top',
                end: 'bottom bottom',
                pin: '.workRight',
                animation: animation,
                scrub: true,
            })
        })
        return () => control.revert()
    }, [])

    return (
        <div className='workWrap'>
            <h1 className='header'>Explore my Works now!</h1>
            <div className='works'>
                <div className='workLeft'>
                    <div className='details'>
                        <h1>Raaga</h1>
                        <div className='para'>
                            <p>Welcome to my inaugural React website! Raaga 🎶, that I've crafted, where you can dive into a world of music and podcasts effortlessly, Enjoy your favorite tunes with just one click!. I've also put my creative touch into designing the site.</p>
                            <p>This project represents not only my first foray into React but also my learning experience with the dynamic implementation of Swiper JS, and I've delved into the world of JavaScript, mastering the orchestration of audio and video elements—control play, pause, and beyond. </p>
                            <p>Explore, listen, and make the most of your musical journey—all in one place!</p>
                        </div>
                        <a href="https://dbrosraaga.netlify.app" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Gossip</h1>
                        <div className='para'>
                            <p>Introducing 'Gossip,' 💬 a dynamic chatting platform showcasing my hands on experience in the MERN Stack. From crafting the frontend with React to developing the backend using Node, Express, and MongoDB,</p>
                            <p>I learnt the integration of socket implementation for live messaging which adds a real-time dimension, also learned Cloudinary for seamless image uploads.</p>
                            <p>Not just a technical accomplishment, 'Gossip' is also a design endeavor, with a user-friendly interface meticulously crafted by me.</p>
                        </div>
                        <a href="#"><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Dharpan.AI</h1>
                        <div className='para'>
                            <p>Meet 'Dharpan AI,' my freelancing adventure where I brought to life a fully responsive website using Next.js. </p>
                            <p>The blog section, smoothly integrated using Sanity.io—a nifty tool that makes content management a breeze. 🚀 Not just limited to Sanity.io, I've also danced with Strapi, another headless CMS, adding a touch of versatility to my skill set. </p>
                        </div>
                        <a href="https://dharpan.ai/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Portfolio</h1>
                        <div className='para'>
                            <p>Introducing my latest freelance project—a simple yet impactful portfolio website crafted for a talented video editor, who also happens to be a friend. 🎥🌟 Designed with responsiveness in mind, this website showcases the editor's work seamlessly across various devices.</p>
                            <p>This project not only underscores my technical skills in web development but also demonstrates my ability to bring a personalized touch to every collaboration.</p>
                        </div>
                        <a href="https://beyondavinash.com/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Woolee</h1>
                        <div className='para'>
                            <p>Introducing "Woolee," my latest venture as the frontend developer in Team Xentrix for the prestigious Smart India Hackathon (SIH). 🚀 We embarked on a unique journey to revolutionize wool management across India—from farm to fabric.</p>
                            <p>Our groundbreaking concept earned us a spot in the grand finale of SIH, "Woolee" isn't just an idea; it's a fully functional website that brings this vision to life.</p>
                            <p>Being a part of this remarkable project not only showcases my skills in frontend development but also highlights our collective effort in addressing real-world challenges through technology and my desgin skills as it was designed by me, For the full details and experience of "Woolee," dive into our website! 🐑🌐</p>
                        </div>
                        <a href="https://woolee-frontend.vercel.app/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>College Techfest Website</h1>
                        <div className='para'>
                            <p>Presenting my college tech fest website—a vibrant digital space designed and crafted by yours truly!</p>
                            <p>The website is a testament to my journey of learning GSAP and mastering the art of animations, creating an engaging and visually appealing platform for our college tech fest. Go and explore the events and witness firsthand the magic of animations! ✨</p>
                        </div>
                        <a href="https://techudbhav.ietebits.com/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Keep(clone)</h1>
                        <div className='para'>
                            <p>Presenting my versatile note-making application, a personal project that goes beyond the basics! 📝 Crafted with HTML, CSS, and vanilla JavaScript, with the added flair of a Dark and Light mode.🌓</p>
                            <p>I've harnessed the real power of DOM manipulation and local storage to make your note-taking experience both intuitive and convenient.</p>
                        </div>
                        <a href="https://c0deepak.github.io/keepNotes/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Digitea</h1>
                        <div className='para'>
                            <p>Introducing "Digitea," a challenging yet exhilarating freelancing project where I brought cool animations and intricate designs to life on the frontend! 🌐💻</p>
                            <p>Crafted with passion and precision, this project pushed the boundaries of frontend development. </p>
                        </div>
                        <a href="https://digitea.in/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                    <div className='details'>
                        <h1>Zapp Invest</h1>
                        <div className='para'>
                            <p>Presenting my standout internship project—a two-and-a-half-month journey steeped in MERN technology! 🚀 As the primary frontend contributor, I delved into the intricacies of state management, mastering Context API and diving deep into context management.</p>
                            <p>This internship also honed my backend skills and also allowed me to flex my design muscles. From conceptualizing pages to breathing life into them through code.</p>
                        </div>
                        <a href="https://www.zappinvest.com/" target='_blank'><Button value='Visit Website'></Button></a>
                    </div>
                </div>

                <div className='workRight'>
                    <div className='rightBlock'>
                        <div className='workGallery'>
                            <img src="/img/works/1.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/2.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/3.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/4.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/5.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/6.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/7.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/8.png" alt="" />
                        </div>
                        <div className='workGallery'>
                            <img src="/img/works/9.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work