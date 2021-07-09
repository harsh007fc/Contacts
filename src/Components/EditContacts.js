import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import {Link} from 'react-router-dom'
// {UpdateContactsHandler}
function EditContacts(props) {
    // console.log(props);
    let UpdateContactsHandler = props.UpdateContactsHandler;
    // let {id,name,mail} = contact;
    // console.log(props.location.state.contacts.id);
    let [id,setId] = useState(props.location.state.contacts.id); 
    let [name,setName] = useState(props.location.state.contacts.name); 
    let [mail,setMail] = useState(props.location.state.contacts.mail); 
    let handleName = (e)=>{
        setName(e.target.value);
    }
    let handleMail = (e)=>{
        setMail(e.target.value);
    }
    let history = useHistory();

    let update = (e) => {
        e.preventDefault();
        if(name === '' && mail === ''){
            alert("All the Feilds are mandatory!!!");
            return;
        }
        UpdateContactsHandler({id,name,mail})
        setId("");
        setName("");
        setMail("");
        //iske liye useHistory import krna pda
        history.push("/")
        // console.log(history);
    }
    return (
        <>
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className='ui form' onSubmit={update} >
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="email" name="name" placeholder="Email" value={mail} onChange={handleMail} />
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>

        </>
    )
}

export default EditContacts
