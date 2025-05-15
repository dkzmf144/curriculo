function showSection(id) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function enviarMensagem() {
  alert(
    "Função de envio de mensagem acionada! Aqui poderia ir para o WhatsApp ou Gmail real."
  );
}
