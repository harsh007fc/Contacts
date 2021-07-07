import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

function AddContacts({AddContactsHandler}) {
    let [name,setName] = useState(''); 
    let [mail,setMail] = useState(''); 
    let handleName = (e)=>{
        setName(e.target.value);
    }
    let handleMail = (e)=>{
        setMail(e.target.value);
    }
    let history = useHistory();

    let handleSubmit = (e) => {
        e.preventDefault();
        if(name === '' && mail === ''){
            alert("All the Feilds are mandatory!!!");
            return;
        }
        AddContactsHandler({name,mail})
        setName("");
        setMail("");
        //iske liye useHistory import krna pda
        history.push("/")
        // console.log(history);
    }
    return (
        <>
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={handleSubmit} >
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} />
                    </div>
                    <div className="field">
                        <label >Email</label>
                        <input type="email" name="name" placeholder="Email" value={mail} onChange={handleMail} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>

        </>
    )
}

export default AddContacts
