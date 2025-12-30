import React from 'react'
import './Card.css'

const Card = (props) => {
    const clickEvent = () => {
        alert("Followed !")
    }
    return (
        <div className='container'>
            <div className='imagecontainer'>
                <div className='up'>
                    <img className='image' src={props.image} alt="profile" />

                </div>
            </div>
            <div className='content'>
                <h2>{props.name}</h2>
                <p>A passionate web development learner focused on building clean and responsive user interfaces using HTML, CSS,and React. Enjoys improving coding skills and continuously learning new technologies.</p>
            </div>
            <button className='button' onClick={clickEvent}>Follow Me</button>
        </div>
    )
}

export default Card
