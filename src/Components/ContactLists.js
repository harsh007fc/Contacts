import React from 'react'
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
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactLists


// key={contact.id}