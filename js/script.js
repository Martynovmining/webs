"use script";

//SIDEBAR

const bar = document.getElementById('sidebar');

function openMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener('scroll', (e) => {
    if (e.target === document && bar.classList.contains('active')) {
        openMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && bar.classList.contains('active')) {
        openMenu();
    }
});

//MODAL

const modalTrigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]');

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show', 'fade');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modalTrigger.addEventListener('click', () => {
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }

});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show', 'fade')) {
        closeModal();
    }
});