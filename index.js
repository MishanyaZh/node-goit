const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction ({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await listContacts();
        console.table(contacts);
      break;

    case 'get':
      const contact = await getContactById(id);
      if (!contact) {
        throw new Error(`contact with id=${id} not found`);
      }
        console.table(contact);
      break;

    case 'add':
      const newContact = await addContact(name, email, phone);
        console.table(newContact)
      break;

    case 'remove':
      const removeContactById = await removeContact(id);
        console.table(removeContactById);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);