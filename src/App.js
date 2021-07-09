import React,{useState,useEffect} from "react";
import '../src/App.css'
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import { uuid } from "uuidv4";
import Header from "./Components/Header";
import api from './api/Contacts'
import AddContacts from "./Components/AddContacts";
import ContactLists from "./Components/ContactLists";
import ContactDetail from "./Components/ContactDetail";
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
  //retrieve contracts

  let retrieveContacts = async() => {
    let response = await api.get('/contacts');
    console.log(response.data);
    return response.data;
  }
  let AddContactsHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  }

  useEffect(()=>{
    // let retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveContacts){
    //   setContacts(retriveContacts);
    // }
    let getAllContacts = async() => {
      let allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    }
    getAllContacts();
  },[]);

  let removeContactHandler =(id)=>{
    let newContactList = contacts.filter((contact)=>{
      return contact.id != id;
    });

    setContacts(newContactList);
  };


  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route path='/contact/:id' component={ContactDetail}/>
          <Route path="/add" exact render={(props)=>(<AddContacts {...props} AddContactsHandler={AddContactsHandler}/>)} />
          <Route path="/" exact render={(props)=>( <ContactLists {...props} contacts={contacts} getContactId={removeContactHandler}/>)}/>
        </Switch>

       
      </Router>
    </div>
  );
}

export default App;
