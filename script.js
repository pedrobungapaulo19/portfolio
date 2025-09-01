function sendMessage(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("statusMsg").textContent = "Mensagem enviada com sucesso!";
  } else {
    document.getElementById("statusMsg").textContent = "Preencha todos os campos.";
  }
}