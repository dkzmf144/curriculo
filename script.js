function showSection(id) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function enviarMensagem() {
  const numero = "5511943679193";
  const mensagem = "Olá Isaque, vi seu currículo online!";
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}
