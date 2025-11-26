const posts = [
  {
    titulo: "Como começar a programar em JavaScript",
    data: "2025-09-01",
    conteudo: "JavaScript é uma linguagem poderosa para criar sites interativos. Neste artigo, vamos ver os primeiros passos..."
  },
  {
    titulo: "Dicas para estudar programação",
    data: "2025-08-28",
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
      <h3>${post.titulo}</h3>
      <small>Publicado em ${formatarData(post.data)}</small>
      <p>${post.conteudo}</p>
    `;

    container.appendChild(postElement);
  });
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", mostrarPosts);