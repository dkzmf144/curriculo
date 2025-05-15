// Função para trocar seções do currículo
function showSection(id) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  // Atualizar a classe active no menu
  document.querySelectorAll("nav ul li").forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`nav ul li[onclick="showSection('${id}')"]`)
    .classList.add("active");
}

// Função para abrir WhatsApp com mensagem pronta
function enviarMensagem() {
  const numero = "5511943679193";
  const mensagem = "Olá Isaque, vi seu currículo online!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Inicializa a primeira seção visível e menu ativo
document.addEventListener("DOMContentLoaded", () => {
  showSection("sobre");
});
