import React from 'react'
import user from '../Images/user.png';
function ContactCard({contact}) {
    let {id,name,mail} = contact //kyunki ek ek krke teeno aarhe hain isliye next step mein destructuring ki
    // console.log(contact);
    return (
        <div className="item">
            <img className="avatar ui image" src={user} alt="" />
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{mail}</div>
                </div>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
            </div>
    )
}

export default ContactCard
