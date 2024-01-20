const contacts = require("./contacts.js")
// const argv = require('yargs').argv;


// TODO: рефакторить
const  invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contacts.listContacts()
        console.table(allContacts);
      break;

    case 'get':
      const contast = await contacts.getContactById(id);
      console.table(contast);
      break;

    // case 'add':
    //   // ... name email phone
    // console.table(contast);
    //   break;

    case 'remove':
      const removeContact = contacts.removeContact(id)
        console.table(removeContact);
      break;

    // default:
    //   console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({action: "list"});

// invokeAction({action: "get" , id: "C9sjBfCo4UJCWjzBnOtxl" });
invokeAction({action: "remove" , id: "C9sjBfCo4UJCWjzBnOtxl" });


// invokeAction(argv);