const fs = require("fs/promises");
const path = require("path");
// const {nanoid} = require("nanoid");


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
    return newList;
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null если объект с таким id не найден.
  }
  
  function addContact(name, email, phone) {
    // ...твой код. Возвращает объект добавленного контакта. Возвращает null если объект с таким id не найден.
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }