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
  
  
  //retrieve contracts
  let retrieveContacts = async() => {
    let response = await api.get('/contacts');
    console.log(response.data);
    return response.data;
  }
  let AddContactsHandler = async(contact) => {
    console.log(contact);
    let request = {
      id:uuid(),
      ...contact
    }
    let response =await api.post('/contacts',request);
    setContacts([...contacts,response.data]);
  }

  useEffect(()=>{
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
