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




const posts = [
  {
    conteudo: "Como começar a programar em JavaScript",
    contrudo: "2025-09-01",
    conteudo: "JavaScript é uma linguagem poderosa para criar sites interativos. Neste artigo, vamos ver os primeiros passos..."
  },
  {
    conteudo: "Dicas para estudar programação",
    conteudo: "2025-08-28",
    conteudo: "Estudar programação exige prática e paciência. Organize seu tempo, faça projetos pequenos e aprenda com a prática."
  }
];

function formatarData(dataString) {
  const data = new Date(dataString);
  return data.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function mostrarPosts() {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <h3>Conteudo</h3>
      <small>Publicado em 1 de Setembro de 2025</small>
      <p>${post.conteudo}</p>
    `;

    container.appendChild(postElement);
  });
}

mostrarPosts();

