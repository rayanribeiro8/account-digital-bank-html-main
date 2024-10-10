import React, { useState } from 'react';
import '/Users/joaopedro/account-digital-bank-html/css.form.css';

function Form() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [habilitarBotao, setHabilitarBotao] = useState(false);
  const [campos, setCampos] = useState({
    nome: '',
    telefone: '',
    email: '',
    password: '',
  });
  const [mensagem, setMensagem] = useState(false);

  const atualizarCampos = (e) => {
    const { id, value } = e.target;
    setCampos((prevCampos) => ({
      ...prevCampos,
      [id]: value,
    }));
  };

  const alternarMostrarSenha = () => {
    setMostrarSenha((prev) => !prev);
  };

  const atualizarAceitacaoTermos = (e) => {
    setHabilitarBotao(e.target.checked);
  };

  const finalizarFormulario = () => {
    const { nome, telefone, email, password } = campos;
    if (nome && telefone && email && password && habilitarBotao) {
      setMensagem(true);
    } else {
      alert("Por favor, preencha todos os campos e aceite os termos.");
    }
  };

  return (
    <form className="flex flex-column formulario">
      <div className="progresso">
        <label>Preencha os campos</label>
        <progress value="100" max="100"></progress>
      </div>

      <div className="flex flex-column">
        <label htmlFor="nome">Digite seu nome</label>
        <input
          type="text"
          id="nome"
          value={campos.nome}
          onChange={atualizarCampos}
        />
      </div>

      <div className="flex flex-column">
        <label htmlFor="telefone">Digite seu telefone</label>
        <input
          type="text"
          id="telefone"
          value={campos.telefone}
          onChange={atualizarCampos}
        />
      </div>

      <div className="flex flex-column">
        <label htmlFor="email">Digite seu e-mail</label>
        <input
          type="text"
          id="email"
          value={campos.email}
          onChange={atualizarCampos}
        />
      </div>

      <div className="flex flex-column">
        <label htmlFor="password">Digite sua senha</label>
        <input
          type={mostrarSenha ? 'text' : 'password'}
          id="password"
          value={campos.password}
          onChange={atualizarCampos}
        />
        <button
          type="button"
          className="mostra-senha"
          onClick={alternarMostrarSenha}
        >
          {mostrarSenha ? 'Ocultar senha' : 'Exibir senha'}
        </button>
      </div>

      <div className="flex termos">
        <input
          type="checkbox"
          name="aceita-termos"
          id="aceita-termos"
          onChange={atualizarAceitacaoTermos}
        />
        <label htmlFor="aceita-termos">
          Eu li, estou ciente das condições de tratamento dos meus dados
          pessoais e dou meu consentimento, quando aplicável, conforme descrito
          nesta
        </label>
      </div>

      <div className="flex">
        <button
          className="botao"
          type="button"
          onClick={finalizarFormulario}
          disabled={!habilitarBotao}
        >
          Abrir minha conta
        </button>
      </div>

      {mensagem && <p className="mensagem">Formulário enviado com sucesso!</p>}
    </form>
  );
}

export default Form;
