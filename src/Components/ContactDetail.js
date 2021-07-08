import React from 'react'
import {Link} from 'react-router-dom'
import user from '../Images/user.jpg'

function ContactDetail(props) {
    console.log(props);
    let {name,mail} = props.location.state.contacts;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image center">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div className="description">{mail}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to={'/'}>
                <button className='ui button blue center'>Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}

export default ContactDetail
