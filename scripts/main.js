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
function toggleTab(activeTabId, inactiveTabId, activeContentId, inactiveContentId, activeTabsId, inactiveTabsId) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(inactiveContentId).classList.add('hidden');
    document.getElementById(activeTabsId).classList.remove('hidden');
    document.getElementById(inactiveTabsId).classList.add('hidden');

    const activeTab = document.getElementById(activeTabId);
    const inactiveTab = document.getElementById(inactiveTabId);

    // Atualiza as classes da aba ativa
    activeTab.classList.add('bg-red-500', 'text-white');
    activeTab.classList.remove('bg-white', 'text-black', 'border-2', 'border-black');
    activeTab.querySelector('span').classList.add('text-red-500', 'bg-white');
    activeTab.querySelector('span').classList.remove('text-white', 'bg-black');

    // Atualiza as classes da aba inativa
    inactiveTab.classList.add('bg-white', 'text-black', 'border-2', 'border-black');
    inactiveTab.classList.remove('bg-red-500', 'text-white');
    inactiveTab.querySelector('span').classList.add('text-white', 'bg-black');
    inactiveTab.querySelector('span').classList.remove('text-red-500', 'bg-white');
}

document.getElementById('brasilMeetingTab').addEventListener('click', function () {
    toggleTab('brasilMeetingTab', 'regionalMeetingTab', 'brasilMeetingCntt', 'regionalMeetingCntt', 'brasilMeetingTabs', 'regionalMeetingTabs');
});

document.getElementById('regionalMeetingTab').addEventListener('click', function () {
    toggleTab('regionalMeetingTab', 'brasilMeetingTab', 'regionalMeetingCntt', 'brasilMeetingCntt', 'regionalMeetingTabs', 'brasilMeetingTabs');
});


function brasilToggleTab(activeContentId, inactiveContentIdA, inactiveContentIdB, activeTabId, inactiveTabIdA, inactiveTabIdB) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(activeContentId).classList.add('flex');
    document.getElementById(inactiveContentIdA).classList.add('hidden');
    document.getElementById(inactiveContentIdA).classList.remove('flex');
    document.getElementById(inactiveContentIdB).classList.add('hidden');
    document.getElementById(inactiveContentIdB).classList.remove('flex');

    // Toggle tab styles
    document.getElementById(activeTabId).classList.add('bg-sky-700', 'text-white');
    document.getElementById(activeTabId).classList.remove('bg-white', 'text-sky-700', 'border-2', 'border-sky-700');
    document.getElementById(inactiveTabIdA).classList.remove('bg-sky-700', 'text-white');
    document.getElementById(inactiveTabIdA).classList.add('bg-white', 'text-sky-700', 'border-2', 'border-sky-700');
    document.getElementById(inactiveTabIdB).classList.remove('bg-sky-700', 'text-white');
    document.getElementById(inactiveTabIdB).classList.add('bg-white', 'text-sky-700', 'border-2', 'border-sky-700');
}

document.getElementById('cqBrasilTab').addEventListener('click', function () {
    brasilToggleTab('cqBrasilCntt', 'visitaChuckCntt', 'qualificacaoCntt', 'cqBrasilTab', 'visitaChuckTab', 'qualificacaoTab');
});

document.getElementById('visitaChuckTab').addEventListener('click', function () {
    brasilToggleTab('visitaChuckCntt', 'cqBrasilCntt', 'qualificacaoCntt', 'visitaChuckTab', 'cqBrasilTab', 'qualificacaoTab');
});

document.getElementById('qualificacaoTab').addEventListener('click', function () {
    brasilToggleTab('qualificacaoCntt', 'cqBrasilCntt', 'visitaChuckCntt', 'qualificacaoTab', 'cqBrasilTab', 'visitaChuckTab');
});

function regionalToggleTab(activeContentId, inactiveContentId, activeTabId, inactiveTabId) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(activeContentId).classList.add('flex');
    document.getElementById(inactiveContentId).classList.add('hidden');
    document.getElementById(inactiveContentId).classList.remove('flex');

    // Toggle tab styles
    document.getElementById(activeTabId).classList.add('bg-sky-700', 'text-white');
    document.getElementById(activeTabId).classList.remove('bg-white', 'text-sky-700', 'border-2', 'border-sky-700');
    document.getElementById(inactiveTabId).classList.remove('bg-sky-700', 'text-white');
    document.getElementById(inactiveTabId).classList.add('bg-white', 'text-sky-700', 'border-2', 'border-sky-700');

}
document.getElementById('cqRegionalTab').addEventListener('click', function () {
    regionalToggleTab('cqRegionalCntt', 'meetingActivitiesCntt', 'cqRegionalTab', 'meetingActivitiesTab');
});
document.getElementById('meetingActivitiesTab').addEventListener('click', function () {
    regionalToggleTab('meetingActivitiesCntt', 'cqRegionalCntt', 'meetingActivitiesTab', 'cqRegionalTab');
});

function customerToggleTab(activeContentId, inactiveContentId, activeTabId, inactiveTabId) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(activeContentId).classList.add('flex');
    document.getElementById(inactiveContentId).classList.add('hidden');
    document.getElementById(inactiveContentId).classList.remove('flex');
    // Atualiza os estilos das abas
    const activeTab = document.getElementById(activeTabId);
    const inactiveTab = document.getElementById(inactiveTabId);

    activeTab.classList.add('bg-green-600', 'text-white');
    activeTab.classList.remove('bg-white', 'text-green-600', 'border-2', 'border-green-600');

    inactiveTab.classList.remove('bg-green-600', 'text-white');
    inactiveTab.classList.add('bg-white', 'text-green-600', 'border-2', 'border-green-600');
}

document.getElementById('brasilTab').addEventListener('click', function () {
    customerToggleTab('brasilCntt', 'clusterCntt', 'brasilTab', 'clusterTab');
});
document.getElementById('clusterTab').addEventListener('click', function () {
    customerToggleTab('clusterCntt', 'brasilCntt', 'clusterTab', 'brasilTab');
});