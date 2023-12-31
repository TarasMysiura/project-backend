import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("models", "contacts.json");

const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const listContacts = async () => {
  // Повертає масив контактів.
  const data = await fs.readFile(contactsPath);

  return JSON.parse(data);
};

// export const getContactById = async (id) => {
//   //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
//   const contacts = await listContacts();
//   const result = contacts.find((item) => item.id === id);
//   return result || null;
// };

// export const addContact = async ({ name, email, phone }) => {
//   // .Повертає об'єкт доданого контакту.
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await updateContacts(contacts);
//   return newContact;
// };

// export const updateContactById = async (id, data) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }

//   const updateName = !data.name ? contacts[index].name : data.name;
//   const updateEmail = !data.email ? contacts[index].email : data.email;
//   const updatePhone = !data.phone ? contacts[index].phone : data.phone;

//   const updatedContact = {
//     id,
//     name: updateName,
//     email: updateEmail,
//     phone: updatePhone,
//   };

//   contacts[index] = { id, ...updatedContact };
//   await updateContacts(contacts);
//   return contacts[index];
// };

// export const removeContactById = async (id) => {
//   // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === id);
//   if (index === -1) {
//     return null;
//   }
//   const [result] = contacts.splice(index, 1);
//   await updateContacts(contacts);
//   return result;
// };

export default {
  listContacts,
  // getContactById,
  // removeContactById,
  // addContact,
  // updateContactById,
};
