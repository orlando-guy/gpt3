import React from "react"
import './possibility.css'
import possibilityImg from '../../assets/possibility.png'

const Possibility = () =>{
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImg} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Starded</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, earum. Veniam, iste aspernatur mollitia neque suscipit nisi nihil. Eius, tempora pariatur quos earum voluptates odio ex ipsam ullam recusandae temporibus unde! Modi possimus, architecto minus aut perspiciatis nobis expedita tempore corporis adipisci repellendus sapiente dicta dolore quibusdam optio rem pariatur dolor aliquam? Perferendis reprehenderit ratione animi iste et enim porro assumenda alias expedita velit quae, fuga accusantium nulla quas. Asperiores dolores labore suscipit perspiciatis nulla natus repellendus molestiae quod, modi aliquid! Ex, atque, dignissimos saepe officiis aperiam dolor itaque quos rem aspernatur corporis veniam eos voluptatibus doloribus at culpa quis!</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility