import React from 'react'

function AddContacts() {
    return (
        <>
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className='ui form' action="">
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="email" name="name" placeholder="Email" />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>

        </>
    )
}

export default AddContacts
