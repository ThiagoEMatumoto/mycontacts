class ContactController {
  index(request, response) {
    // listar todos os registros
    response.send('Send from Contact Controller');
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
