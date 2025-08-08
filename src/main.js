document.addEventListener('DOMContentLoaded', function () {
    escondeTodasAbas();
    removeBotaoAtivo();


    const defaultTab = document.querySelector('[data-tab-id="em_breve"]');
    const defaultButton = document.querySelector('[data-tab-button="em_breve"]');

    if (defaultTab && defaultButton) {
        defaultTab.classList.add('shows__list--is-active');
        defaultButton.classList.add('shows__tabs__button--is-active');
    }

    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);

            if (!aba) return;

            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
