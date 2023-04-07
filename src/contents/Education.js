import React from 'react';

function Education() {

    const myeducation = [{ 'origin': "P.T.U.", 'year': "2018-20122", 'location': "Punjab,INDIA" },{ 'origin': "Intermediate", 'year': "2018", 'location': "Punjab,INDIA" },{ 'origin': "Matric", 'year': "2016", 'location': "Punjab,INDIA" }]
    return (
        <div className="condiv">
            <h1 className="subtopic">My Education</h1>

            <div className='Master'><ul>
                {myeducation.map((value) =>{
                    return(
                        <li className='widecard'>
                            <h2>{value.origin}</h2>
                            <h3>{value.year}</h3>
                            <p>{value.location}</p>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
    )

}

export default Education
