const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document)

// <!-- Modal Layout of Sign Up/Sign In-->


const registerElement = $('.btn-register');
const containerModal = $('.register-form');
const totalModal = $('.modal')
const overlayModal = $('.modal__overlay');
const openModal = $('.open')
const closeModal = $('.btn-nomal');

// Open form Sign Up
registerElement.onclick = function(e) {
    e.preventDefault();
    totalModal.classList.add('open')
}

// Close form Sign Up/Sign In
closeModal.onclick = function() {
    totalModal.classList.remove('open')
}

// Ẩn form đi... khi click vên ngoài form
overlayModal.onclick = function() {
    totalModal.classList.remove('open')
}

// tránh sự kiện nổi bọt của  form
containerModal.addEventListener('click', function(event) {
    event.stopPropagation();
})