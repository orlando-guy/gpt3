import React from "react"
import { Feature } from "../../Component"
import './features.css'

const Features = () =>{

    const featuresData = [
        {
            title: 'Improving end distrust instanttly',
            text: 'In sint quis in sunt nisi pariatur aliquip duis incididunt duis dolore proident laboris. Cillum sit irure id culpa.'
        },
        {
            title: 'Become the tended active.',
            text: 'In sint quis in sunt nisi pariatur aliquip duis incididunt duis dolore proident laboris. Cillum sit irure id culpa.'
        },
        {
            title: 'Message or am nothing ',
            text: 'In sint quis in sunt nisi pariatur aliquip duis incididunt duis dolore proident laboris. Cillum sit irure id culpa.'
        },
        {
            title: 'Really boy law country',
            text: 'In sint quis in sunt nisi pariatur aliquip duis incididunt duis dolore proident laboris. Cillum sit irure id culpa.'
        }
    ]

    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize it. Step into Future Today & Make it Happen.</h1>
                <p>Request Entry Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
               {featuresData.map((item, key) => {
                   return <Feature title={item.title} text={item.text} key={key} />
               })}
            </div>
        </div>
    )
}

export default Features