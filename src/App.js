import React,{useState} from "react";
import '../src/App.css'
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";
import ContactLists from "./Components/ContactLists";
function App() {
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
    setContacts([...contacts,contact]);
  }
  return (
    <div className="ui container">
    <Header/>
    <AddContacts AddContactsHandler = {AddContactsHandler }/>
    <ContactLists contacts={contacts}/>
    </div>
  );
}

export default App;
