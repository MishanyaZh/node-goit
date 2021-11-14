const fs = require("fs/promises");
const path = require("path");
const {v4} = require("uuid");

const contactsPath = path.join('./db/contacts.json');

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath, 'utf8')
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
    try {
      const contacts = await listContacts();
      const findContactId = contacts.find(c => c.id === Number(contactId));
    if (!findContactId) {
      return null;
    }
      return findContactId;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const newContacts = contacts.filter(c => c.id !== Number(contactId));
    await updateContacts(newContacts);
    return newContacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const newContact = { id: v4(), name, email, phone };
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateContacts(contacts);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}