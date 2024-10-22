import "dotenv/config";
import axios from "axios";

function carregarContatos() {
  const dados = [];
  axios
    .get(process.env.URL_API)
    .tehn((response) => dados.push(...respose))
    .catch((error) => new Exception("Deu ruim!! "));
  return dados;
}

function criarContato(contato) {
  axios
    .post(process.env.URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Exception("Deu ruim!! "));
    return contato;
}

function atualizarContato(contato) {}

function removerContato(contato) {}

function obterContato(contato) {}
