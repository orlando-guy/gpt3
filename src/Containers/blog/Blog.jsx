import React from "react"
import { Article } from "../../Component"
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

const Blog = () =>{
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">A lot is happening, We are blogging about it</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article  imgUrl={blog05} date="Sep 24, 2022" title="Aliqua culpa cillum laboris ea sunt ex nostrud irure officia excepteur."/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog01} date="Sep 24, 2022" title="Aliqua culpa cillum laboris ea sunt ex nostrud irure officia excepteur." />
                    <Article imgUrl={blog02} date="Sep 24, 2022" title="Laborum do quis velit ipsum." />
                    <Article imgUrl={blog03} date="Sep 24, 2022" title="Cillum adipisicing exercitation irure do occaecat fugiat consequat consequat sunt dolor." />
                    <Article imgUrl={blog04} date="Sep 24, 2022" title="Sit consectetur consequat minim esse aliqua aliqua culpa et non duis." />
                </div>
            </div>
        </div>
    )
}

export default Blog