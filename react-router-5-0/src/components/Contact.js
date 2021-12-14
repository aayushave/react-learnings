import React from 'react'
import faker from 'faker'
import react from 'react'
// import {withRouter} from './withRouter'
const Contact = (props) => {
    console.log('Contact',props)
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000)
    return (
        <div className="Container">
            <h4 className="center" >Contact Us </h4>
            <p> {`${faker.lorem.paragraph()}`}</p>
        </div>
    )
}

export default (Contact)
