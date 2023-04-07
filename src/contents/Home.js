import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/mypic.jpg';
import Social from '../components/Social'



function Home() {
    
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['Hi','Myself Abhishek Thakur','Learning new stuff']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        
    }
    
    export default Home
    