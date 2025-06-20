import React from "react";

const Help = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-2xl p-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-center">Ajuda</h1>
      <p className="mb-4">
        Utilize o editor para escrever seu Markdown. No topo da tela, escolha o
        modo <strong>Editar</strong> para digitar, <strong>Dividir</strong> para
        visualizar editor e preview lado a lado e <strong>Preview</strong> para
        ver apenas o resultado final.
      </p>
      <p>
        O conteúdo é renderizado automaticamente conforme você digita, permitindo
        acompanhar as alterações em tempo real.
      </p>
    </div>
  </div>
);

export default Help;
