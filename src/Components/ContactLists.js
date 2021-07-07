import React from 'react'
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
function ContactLists({contacts,getContactId}) {
    console.log(contacts);

    let deleteContactHandler = (id)=>{
        getContactId(id);
    }
    let renderContactList = contacts.map((contact)=>{
        return <ContactCard key={contact.id}  contact={contact} clickHandler={deleteContactHandler}/>
        
    }) 
    return (
        <div className="main">
            <h2>Contact List
                <Link to='/add'>
            <button className="ui button blue right">Add Contact</button>
            </Link>
            </h2>
        <div className="ui celled list">
            {renderContactList}
        </div>
        </div>
    )
}

export default ContactLists


// key={contact.id}