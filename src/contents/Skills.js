import React from 'react'

function Skills(){
        
           const myskills=['HTML','CSS','JS','REACT JS','NODE JS','SQL']

        return (
            <div className="condiv skills">
            <h1 className="subtopic">My Skills</h1>
            <ul>
            {myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            )
    }
    
    export default Skills
    