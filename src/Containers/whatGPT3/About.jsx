import React from "react"
import { Feature } from "../../Component"
import './about.css'

const About = () =>{
    return (
        <div className="gpt3__about section__margin" id="about">
            <div className="gpt3__about-feature">
                <Feature 
                    title="What is GPT3"
                    text="Eiusmod aliqua ad velit incididunt velit ipsum commodo proident est exercitation minim cillum et. Culpa elit elit sint laborum proident officia."
                />
            </div>
            <div className="gpt3__about-heading">
                <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__about-container">
                <Feature 
                    title="Chatbox"
                    text="Duis sit minim laborum minim sit ea labore id anim velit elit laborum."
                />
                <Feature 
                    title="Knowledgebase"
                    text="Enim occaecat aliqua sunt esse enim consectetur duis deserunt minim est. Nisi quis consequat officia sunt voluptate adipisicing officia commodo nisi nisi nulla eiusmod cupidatat culpa."
                />
                <Feature 
                    title="Education"
                    text="Cupidatat adipisicing occaecat et velit elit est consequat id dolor anim qui anim officia anim. Nulla commodo anim ut ad ea voluptate aute ea duis commodo ad quis adipisicing."
                />
            </div>
        </div>
    )
}

export default About