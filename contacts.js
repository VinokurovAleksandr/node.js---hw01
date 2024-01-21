const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require('nanoid');
// npm i nanoid@3.3.4


const  contactsPath  = path.join(__dirname, "db/contacts.json");


   const listContacts  = async()  => {
    const allContacts = await fs.readFile(contactsPath)
    return JSON.parse(allContacts);
  }
  
  const getContactById = async(id) => {
    const allContacts = await listContacts();
    const res = allContacts.find(item => item.id === id);
    if(!res){
      return null
    }
    return res;
  }
  
  const removeContact = async(id) => {
    const allContacts = await listContacts();
    const  inx = allContacts.findIndex(item => item.id !== id);
    if(inx === -1){
      return null;
    }
    const newList = allContacts.splice(inx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    console.table(newList);
    return newList;
  //  Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
  }
  
  const addContact = async (name, email, phone) => {
    const allContacts = await listContacts();
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  };

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }