import React from 'react';
import '/Users/joaopedro/account-digital-bank-html/css/aside.css';

function Aside() {
  return (
    <aside className="flex flex-column">
      <div className="flex flex-column">
        <div className="logo">
          <a href="/">
            <img src="img/logo.svg" alt="Digital Bank Logo" />
          </a>
        </div>
        <div className="titulo">
          <h1>
            Complete os campos ao lado para abrir sua Conta Digital
          </h1>
          <p className="subtitulo">
            Aqui, você acontece com segurança e toda a praticidade que o Digital Bank oferece. Mais do que uma conta com cartão, você tem uma experiência completa com investimentos, Mimos exclusivos e muito mais.
          </p>
        </div>
        <small>&copy; Criado por Nome do Aluno e Matrícula 000000000</small>
      </div>
    </aside>
  );
}

export default Aside;
