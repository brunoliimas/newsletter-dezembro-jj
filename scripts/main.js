// Função para inicializar os event listeners
function initializeTabs() {
    // Seleciona todos os títulos das tabs
    const tabTitles = document.querySelectorAll('[id^="title-tab-"]');

    tabTitles.forEach(title => {
        title.addEventListener('click', () => {
            // Seleciona o conteúdo relacionado com base no ID do título
            const contentId = title.id.replace('title-', 'cntt-');
            const content = document.getElementById(contentId);

            // Seleciona o ícone dentro do título da tab
            const icon = title.querySelector('.material-symbols-outlined');


            // Alterna a visibilidade do conteúdo
            content.classList.toggle('hidden');
            content.classList.add('flex');
            icon.classList.toggle('rotate-180');
        });
    });
}

// Inicializa os event listeners quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', initializeTabs);

var swiper = new Swiper(".preventFocus", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});


// Function to hide all graphs
function hideAllGraphs() {
    document.querySelectorAll('[id^="data-grafico"]').forEach(graph => {
        graph.classList.add('hidden');
    });
}

// Function to show the selected graph
function showGraph(graphId) {
    document.getElementById(graphId).classList.remove('hidden');
}

// Adding event listeners to each tab
document.getElementById('tab-grafico-01').addEventListener('click', () => {
    hideAllGraphs();
    showGraph('data-grafico-01');
});

document.getElementById('tab-grafico-02').addEventListener('click', () => {
    hideAllGraphs();
    showGraph('data-grafico-02');
});

document.getElementById('tab-grafico-03').addEventListener('click', () => {
    hideAllGraphs();
    showGraph('data-grafico-03');
});

document.getElementById('tab-grafico-04').addEventListener('click', () => {
    hideAllGraphs();
    showGraph('data-grafico-04');
});

// Show the first graph by default
document.addEventListener('DOMContentLoaded', () => {
    showGraph('data-grafico-01');
});