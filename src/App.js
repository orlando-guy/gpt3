import React from "react";
import './App.css'
import {Header, Blog, Possibility, Features, About, Footer} from './Containers'
import {Cta, NavBar, Brand} from './Component'


const App = () => {
    return (
        <div className="App">
            <div className="gradient-bg">
                <NavBar />
                <Header />
            </div>
            <Brand />
            <About />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App