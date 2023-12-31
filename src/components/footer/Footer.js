import React from 'react'
import './footer.css'
import { ImGithub, ImLinkedin } from 'react-icons/im'
import { IoSend } from 'react-icons/io5'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="heading" id="collab">Collaborate</div>
                <div className="footerWrapper">
                    <div className="left">
                    <form action='https://formspree.io/f/xbjeoowy' method='POST'>
                        <div className="top">
                            <input type="text" placeholder="Name" name='username' required autoComplete='off'/>
                            <input type="email" placeholder="Email" name='useremail' required autoComplete='off'/>
                        </div>
                        <div className="middle">
                            <input type="text" placeholder="Any Message" name='usermessage' required autoComplete='off'/>
                        </div>
                        <div className="bottom">
                            <button type='submit'>Send <IoSend/></button>
                        </div>
                    </form>
                    </div>
                    <div className="right">
                        <div className="top">
                            Email : deepakkumarkasyap12@gmail.com
                        </div>
                        <div className="bottom">
                            Connect : <a href="https://github.com/C0deepak" target="_blank"><ImGithub/></a> <a href="https://www.linkedin.com/in/deepak-kumar-052779225/" target='_blank'><ImLinkedin/></a>
                        </div>
                    </div>
                </div>
                <div className="footerCopy">copyright &copy; Designed and Developed with love By D Bros.(Imalive)</div>
            </footer>
        </>
    )
}

export default Footer