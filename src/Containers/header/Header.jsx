import React from "react"
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () =>{
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Someting amazing with GPT-3 OpenAi </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cumque dolore omnis voluptas illum! Aperiam, vero, debitis quod tempora consequatur eveniet expedita beatae incidunt obcaecati aspernatur, quisquam adipisci! Sit, cupiditate!</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your email address" name="" id="" />
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1.600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="" />
            </div>
        </div>
    )
}

export default Header