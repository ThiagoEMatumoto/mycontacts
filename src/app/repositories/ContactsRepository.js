const contacts = require('../Mocks/contatos');

class ContactRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }
}

module.exports = new ContactRepository();
