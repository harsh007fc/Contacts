import React from "react";
import Header from "./Components/Header";
import AddContacts from "./Components/AddContacts";
import ContactLists from "./Components/ContactLists";
function App() {
  let contacts = [
    {
      id:1,
      name:"Harshit Sharma",
      mail:"Harsh@gmail.com"
    },
    {
      id:2,
      name:"Akshit Sharma",
      mail:"Akshit@gmail.com"
    },
    {
      id:3,
      name:"Shivam Sharma",
      mail:"Shivam@gmail.com"
    }
  ]
  return (
    <div className="ui container">
    <Header/>
    <AddContacts/>
    <ContactLists contacts={contacts}/>
    </div>
  );
}

export default App;
