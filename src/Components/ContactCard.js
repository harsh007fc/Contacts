import React from 'react'
import {Link} from 'react-router-dom'
import user from '../Images/user.png';
function ContactCard({contact,clickHandler}) {
    let {id,name,mail} = contact //kyunki ek ek krke teeno aarhe hain isliye next step mein destructuring ki
    // console.log(contact);
    return (
        <div className="item">
            <img className="avatar ui image" src={user} alt="" />
                <div className="content">
                    {/* //adding id to the route as below */}
                    <Link to={{pathname:`/contact/${id}`,state:{contacts:contact}}}>
                    <div className="header">
                        {name}
                    </div>
                    <div>{mail}</div>
                    </Link>
                </div>
                <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px",marginLeft:'10px'}}
                onClick={()=>clickHandler(id)}></i>
                <Link to={{pathname:`/edit`,state:{contacts:contact}}}>
                <i className="edit alternate outline icon" style={{color:"blue",marginTop:"7px"}}
                ></i>
                </Link>
            </div>
    )
}

export default ContactCard
