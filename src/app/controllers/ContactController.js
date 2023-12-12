const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // listar todos os registros
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // obter um registro
  }

  store() {
    // cria um novo registro
  }

  update() {
    // edita um registro
  }

  delete() {
    // deleta um registro
  }
}

// singleton
module.exports = new ContactController();
