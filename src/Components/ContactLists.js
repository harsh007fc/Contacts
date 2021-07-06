import React from 'react'
import ContactCard from './ContactCard';
function ContactLists({contacts}) {
    console.log(contacts);
    let renderContactList = contacts.map((contact)=>{
        return <ContactCard  contact={contact}/>
        
    }) 
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactLists


// key={contact.id}