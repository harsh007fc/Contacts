import React from 'react'
import {Link} from 'react-router-dom'
import user from '../Images/user.jpg'

function ContactDetail() {
    return (
        <div className="main">
            <div className="ui card center">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        Harshit Sharma
                    </div>
                    <div className="description">Mail@mail.com</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail
