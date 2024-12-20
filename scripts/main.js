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

// document.getElementById('brasilMeetingTab').addEventListener('click', function () {
//     toggleTab('brasilMeetingTab', 'regionalMeetingTab', 'brasilMeetingCntt', 'regionalMeetingCntt', 'brasilMeetingTabs', 'regionalMeetingTabs');
// });

// document.getElementById('regionalMeetingTab').addEventListener('click', function () {
//     toggleTab('regionalMeetingTab', 'brasilMeetingTab', 'regionalMeetingCntt', 'brasilMeetingCntt', 'regionalMeetingTabs', 'brasilMeetingTabs');
// });


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

// document.getElementById('cqBrasilTab').addEventListener('click', function () {
//     brasilToggleTab('cqBrasilCntt', 'visitaChuckCntt', 'qualificacaoCntt', 'cqBrasilTab', 'visitaChuckTab', 'qualificacaoTab');
// });

// document.getElementById('visitaChuckTab').addEventListener('click', function () {
//     brasilToggleTab('visitaChuckCntt', 'cqBrasilCntt', 'qualificacaoCntt', 'visitaChuckTab', 'cqBrasilTab', 'qualificacaoTab');
// });

// document.getElementById('qualificacaoTab').addEventListener('click', function () {
//     brasilToggleTab('qualificacaoCntt', 'cqBrasilCntt', 'visitaChuckCntt', 'qualificacaoTab', 'cqBrasilTab', 'visitaChuckTab');
// });

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
// document.getElementById('cqRegionalTab').addEventListener('click', function () {
//     regionalToggleTab('cqRegionalCntt', 'meetingActivitiesCntt', 'cqRegionalTab', 'meetingActivitiesTab');
// });
// document.getElementById('meetingActivitiesTab').addEventListener('click', function () {
//     regionalToggleTab('meetingActivitiesCntt', 'cqRegionalCntt', 'meetingActivitiesTab', 'cqRegionalTab');
// });

function customerToggleTab(activeContentId, inactiveContentId, activeTabId, inactiveTabId) {
    document.getElementById(activeContentId).classList.remove('hidden');
    document.getElementById(activeContentId).classList.add('flex');
    document.getElementById(inactiveContentId).classList.add('hidden');
    document.getElementById(inactiveContentId).classList.remove('flex');
    // Atualiza os estilos das abas
    const activeTab = document.getElementById(activeTabId);
    const inactiveTab = document.getElementById(inactiveTabId);

    activeTab.classList.add('bg-red-500', 'text-white');
    activeTab.classList.remove('bg-white', 'text-red-500', 'border-2', 'border-red-500');

    inactiveTab.classList.remove('bg-red-500', 'text-white');
    inactiveTab.classList.add('bg-white', 'text-red-500', 'border-2', 'border-red-500');
}

// document.getElementById('brasilTab').addEventListener('click', function () {
//     customerToggleTab('brasilCntt', 'clusterCntt', 'brasilTab', 'clusterTab');
// });
// document.getElementById('clusterTab').addEventListener('click', function () {
//     customerToggleTab('clusterCntt', 'brasilCntt', 'clusterTab', 'brasilTab');
// });

var swiperQualityMonthData = new Swiper(".qualityMonthData", {
     autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperQualityMonthFotos = new Swiper(".qualityMonthFotos", {
     autoHeight: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperQualityMonthFotos2 = new Swiper(".qualityMonthFotos2", {
     autoHeight: true,
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperQualityMonthFotos,
    },
});

var swiperCustomerFocusOperation = new Swiper(".customerFocusOperation", {
     autoHeight: true,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperCustomerFocusOperation2 = new Swiper(".customerFocusOperation2", {
     autoHeight: true,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperCustomerFocusOperation,
    },
});

var swiperProjectAnemoRegional = new Swiper(".projectAnemoRegional", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiperMexico = new Swiper(".mexico", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperMexico2 = new Swiper(".mexico2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperMexico,
    },
});

var swiperSejaVoce = new Swiper(".sejaVoce", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperSejaVoce2 = new Swiper(".sejaVoce2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperSejaVoce,
    },
});
var swiperAtividadesHealth = new Swiper(".atividadesHealth", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiperAtividadesHealth2 = new Swiper(".atividadesHealth2", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiperClusterSul = new Swiper(".clusterSul", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiperClusterSul2 = new Swiper(".clusterSul2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperClusterSul,
    },
});

// Inicialização para o slider México e Brasil
var swiperMexicoBrasil = new Swiper(".mexicoBrasil", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiperMexicoBrasil2 = new Swiper(".mexicoBrasil2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperMexicoBrasil,
    },
});

// Inicialização para o slider Cluster Norte
var swiperClusterNorte = new Swiper(".clusterNorte", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiperClusterNorte2 = new Swiper(".clusterNorte2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperClusterNorte,
    },
});

// Inicialização para o slider Argentina
var swiperArgentina = new Swiper(".argentina", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiperArgentina2 = new Swiper(".argentina2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperArgentina,
    },
});

// Inicialização para o slider Chile
var swiperChile = new Swiper(".chile", {
     autoHeight: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiperChile2 = new Swiper(".chile2", {
     autoHeight: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiperChile,
    },
});

var swiperSaibaMais = new Swiper(".saibaMais", {
     autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiperModuloEtq = new Swiper(".moduloEtq", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiperIPrevent = new Swiper(".iPrevent", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiperRodrigo = new Swiper(".rodrigo", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});
var swiperCxAcademy = new Swiper(".cxAcademy", {
     autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

var swiperExplorer = new Swiper(".explorer", {
     autoHeight: true,
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperExplorer2 = new Swiper(".explorer2", {
    spaceBetween: 10,
    autoHeight: true,
    thumbs: {
      swiper: swiperExplorer,
    },
  });
var swiperLocalProject = new Swiper(".localProject", {
     autoHeight: true,
    spaceBetween: 1,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiperLocalProject2 = new Swiper(".localProject2", {
    spaceBetween: 10,
    autoHeight: true,
    thumbs: {
      swiper: swiperLocalProject,
    },
  });

function configurePopup(openButtonId, closeButtonId, popupId) {
    const openButton = document.getElementById(openButtonId);
    const closeButton = document.getElementById(closeButtonId);
    const popup = document.getElementById(popupId);

    if (openButton && closeButton && popup) {

        openButton.addEventListener("click", () => {
            popup.classList.remove("hidden");
            popup.classList.add("flex");
        });

        closeButton.addEventListener("click", () => {
            popup.classList.add("hidden");
            popup.classList.remove("flex");
        });

        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                popup.classList.add("hidden");
                popup.classList.remove("flex");
            }
        });
    }
}

configurePopup("openPopupModulo", "closePopupModulo", "popupModulo");
configurePopup("openElementosPrincipais", "closeElementosPrincipais", "popupElementosPrincipais");
configurePopup("openFluxoDar", "closeFluxoDar", "popupFluxoDar");
configurePopup("openFluxograma", "closeFluxograma", "popupFluxograma");
configurePopup("openHighlights", "closeHighlights", "popupHighlights");
configurePopup("openResultados", "closeResultados", "popupResultados");
configurePopup("openResultadosSacolas", "closeResultadosSacolas", "popupResultadosSacolas");
configurePopup("openHighlightsSacolas", "closeHighlightsSacolas", "popupHighlightsSacolas");
