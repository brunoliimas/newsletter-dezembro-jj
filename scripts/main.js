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


var swiper = new Swiper(".cqEnabling", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});


var swiper = new Swiper(".customerFocus", {
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

var brasilMeeting = new Swiper(".brasilMeeting", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
});
var brasilMeeting2 = new Swiper(".brasilMeeting2", {
    spaceBetween: 10,
    thumbs: {
        swiper: brasilMeeting,
    },
});

var regionalMeeting = new Swiper(".regionalMeeting", {
    slidesPerView: 5,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
});
var regionalMeeting2 = new Swiper(".regionalMeeting2", {
    spaceBetween: 10,
    thumbs: {
        swiper: regionalMeeting,
    },
});
function toggleTab(activeTabId, inactiveTabId, activeContentId, inactiveContentId) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(inactiveContentId).classList.add('hidden');

    const activeTab = document.getElementById(activeTabId);
    const inactiveTab = document.getElementById(inactiveTabId);

    activeTab.classList.add('bg-red-500', 'text-white');
    activeTab.classList.remove('bg-white', 'text-red-500', 'border-2', 'border-red-500');
    activeTab.querySelector('span').classList.add('text-red-500', 'bg-white');
    activeTab.querySelector('span').classList.remove('text-white', 'bg-red-500');

    inactiveTab.classList.add('bg-white', 'text-red-500', 'border-2', 'border-red-500');
    inactiveTab.classList.remove('bg-red-500', 'text-white');
    inactiveTab.querySelector('span').classList.add('text-white', 'bg-red-500');
    inactiveTab.querySelector('span').classList.remove('text-red-500', 'bg-white');
}

document.getElementById('brasilMeetingTab').addEventListener('click', function () {
    toggleTab('brasilMeetingTab', 'regionalMeetingTab', 'brasilMeetingCntt', 'regionalMeetingCntt');
});

document.getElementById('regionalMeetingTab').addEventListener('click', function () {
    toggleTab('regionalMeetingTab', 'brasilMeetingTab', 'regionalMeetingCntt', 'brasilMeetingCntt');
});

document.getElementById('brasilLearn2Tab').addEventListener('click', function () {
    console.log("Clicou");
});


// Set the initial active tab
// document.getElementById('brasilLearn1Tab').click();