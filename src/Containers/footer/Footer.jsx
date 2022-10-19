import React from "react"
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () =>{
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>links</h4>
                    <p>Links</p>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Term & Condition</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get In touch</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                    <p>guichardorlando@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p> 2022 GPT-3. Coded with ❤ by Orlando.</p>
            </div>
        </div>
    )
}

export default Footer