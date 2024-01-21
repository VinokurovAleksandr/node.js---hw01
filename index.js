const contacts = require("./contacts.js");
const { Command } = require('commander');

const  program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();


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

    case 'add':
      const addNewContact = await contacts.addContact(name, email, phone);
        console.table(addNewContact);
      break;

    case 'remove':
      const removeContact = contacts.removeContact(id)
        // console.table(removeContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({action: "list"});

// invokeAction({action: "get" , id: "C9sjBfCo4UJCWjzBnOtxl" });
// invokeAction({action: "remove" , id: "C9sjBfCo4UJCWjzBnOtxl" });
// invokeAction({action: "add" , name: 'Kris', email: 'kris@mail.com', phone:"+380999999999" });


invokeAction(argv);