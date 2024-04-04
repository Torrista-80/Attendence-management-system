const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const login = document.querySelector('.login');
signUpBtnLink.addEventListener('click', () => {
    login.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    login.classList.toggle('active');
}); 