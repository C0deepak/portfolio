import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

const Card = (props) => {
    return (
        <>
            <div className="projectCard">
                <div className="top">
                    <div className="left"><img src={props.img} alt="" className={props.class}/></div>
                    <div className="right">{props.des}</div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <a href={props.link} target="_blank">visit site <FiArrowUpRight /></a>
                    </div>
                    <div className="right">
                        <a href="#"><FaGithubSquare /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card