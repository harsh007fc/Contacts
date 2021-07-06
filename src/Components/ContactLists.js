import React from 'react'

function ContactLists({contacts}) {
    console.log(contacts);
    let renderContactList = contacts.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>{contact.mail}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
    }) 
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactLists
