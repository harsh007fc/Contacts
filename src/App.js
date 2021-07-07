import React,{useState,useEffect} from "react";
import '../src/App.css'
import { uuid } from "uuidv4";
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";
import ContactLists from "./Components/ContactLists";
function App() {
  let LOCAL_STORAGE_KEY = "contacts"
  let [contacts,setContacts] = useState([]);
  // let contacts = [
  //   {
  //     id:1,
  //     name:"Harshit Sharma",
  //     mail:"Harsh@gmail.com"
  //   },
  //   {
  //     id:2,
  //     name:"Akshit Sharma",
  //     mail:"Akshit@gmail.com"
  //   },
  //   {
  //     id:3,
  //     name:"Shivam Sharma",
  //     mail:"Shivam@gmail.com"
  //   }
  // ]
  let AddContactsHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  useEffect(()=>{
    let retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts){
      setContacts(retriveContacts);
    }
  },[]);

  let removeContactHandler =(id)=>{
    let newContactList = contacts.filter((contact)=>{
      return contact.id != id;
    });

    setContacts(newContactList);
  };


  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="ui container">
    <Header/>
    <AddContacts AddContactsHandler = {AddContactsHandler }/>
    <ContactLists contacts={contacts} getContactId = {removeContactHandler}/>
    </div>
  );
}

export default App;
