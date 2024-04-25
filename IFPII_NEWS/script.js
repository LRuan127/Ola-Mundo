const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
  
window.addEventListener("scroll", function(){
    let header = document.querySelector('.header'); // Corrigido para .header
    header.classList.toggle('rolagem', window.scrollY > 500);
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Evita o comportamento padrão do link
  
      const targetId = link.getAttribute('href'); // Obtém o ID do alvo do link
      const targetSection = document.querySelector(targetId); // Obtém a seção de destino
  
      const headerHeight = document.querySelector('.header').offsetHeight; // Obtém a altura do cabeçalho
  
      if (targetSection) {
        // Adicione um atraso de 500 milissegundos (0.5 segundos) antes de rolar suavemente
        setTimeout(() => {
          const targetPosition = targetSection.offsetTop - headerHeight; // Calcula a posição final da rolagem
          window.scrollTo({ top: targetPosition, behavior: 'smooth' }); // Rolagem suave para a posição ajustada
        }, 100);
      }
      
      // Fecha o menu após clicar em um link (opcional)
      nav.classList.remove('active');
    });
  });
  