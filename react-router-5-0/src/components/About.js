import React from 'react'
import faker from 'faker'
const About = () => {
    return (
        <div className="Container">
            <h4 className="center" >About Us </h4>
            <p> {`${faker.lorem.paragraph()}`}</p>
        </div>
    )
}

export default About
