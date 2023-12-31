import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import './scrollsection.css'
import Button from '../button/Button'
import { FaQuoteLeft } from 'react-icons/fa'

const Scrollsection = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: '-100vw',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        pin: true,
        scrub: true,
      }
    })

    return () => {
      pin.kill()
    }
  }, [])

  const testimonialData = [
    { id: 1, delay: -1, cname: 'Naman Goyal', cabout: 'Founder, Zapp Invest', para: 'He has the skills and experience necessary to be successful in this field. We are confident that you will be a valuable asset to any Team.' },
    { id: 2, delay: 0, cname: 'Vivek Kunwar', cabout: 'Founder, Breezo.AI', para: 'He has strong work ethic and proficiency in frontend development which really made a significant positive impact on our team.' },
    { id: 3, delay: 1, cname: 'Harshak Sinha', cabout: 'CEO, Digitea', para: 'Deepak possesses a solid understanding of frontend development and has a remarkable ability to grasp new concepts rapidly.' },
    { id: 4, delay: 2, cname: 'Badal Kumar', cabout: 'UI/UX, Mokshar', para: 'Exceptional work by Deepak in creating my portfolio. His keen eye for design, attention to detail, and expertise was amazing.' },
    { id: 5, delay: 3, cname: 'Avinash Kumar', cabout: 'Video Editor, Freelancer', para: 'He truly exceeded my expectations. I highly recommend Deepak for his outstanding skills and professional approach.' },
  ];

  return (
    <div className='scroll-section-outer'>
      <div ref={triggerRef}>
        <div ref={sectionRef} className='scroll-section-inner'>
          <div className='scroll-section1'>
            <div className='about'>
              <div className='aboutLeft'>
                <h1>About Me</h1>
                <p>Hey everyone! 👋 I'm Deepak Kumar, your friendly mickey-mouse in the Disney land rocking the stage with CSS and dancing with JavaScript. It's like being in a playground where CSS is my favorite paint, and knowledge are my brushes, which are getting more experienced with the projects, and I'm loving every moment.</p>
                <p>But hey, the show goes on! 🚀 I'm a maestro in state-management, API handling, and have even touched the paintings with Headless-CMS. But guess what? The adventure doesn't stop there. I'm on a quest to become a Full Stack Web Developer, with MERN as my tool.</p>
                <p>Oh, and when I'm not crafting digital paintings, I'm painting with pixels in the graphic design world and also adding heat-maps 🔥💻 of LeetCode and GFGs to my list.</p>
                <p>Let's turn this tech journey into a wild ride together, where simplicity meets creativity, and every line of code is a step closer to building something extraordinary!</p>
                <a href="#collab"><Button value="Contact Me"></Button></a>
              </div>
              <div className='aboutMiddle'>
                <h3>I can Fill colours to your website also</h3>
                <img src="/img/about.png" alt="" />
                <h3>oops! my websites theme is actually black & white dont worry please &#128517;</h3>
              </div>
              <div className='aboutRight'>
                <h1>Testimonial</h1>
                <div className='testimonial'>
                  {testimonialData.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className='testimonialCard'
                      style={{ '--delay': testimonial.delay }}
                    >
                      <div className='quote'><FaQuoteLeft size={50}/></div>
                      <div className='para'>{testimonial.para}</div>
                      <div className='cabout'>
                        <div className='name'>{testimonial.cname}</div>
                        <div className='where'>{testimonial.cabout}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className='scroll-section2'>
            <h1>Awards</h1>
          </div> */}
          {/* <div className='scroll-section'>
            <h1>Section 3</h1>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Scrollsection