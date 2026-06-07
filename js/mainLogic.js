const themeButton = document.getElementById("themeBtn");
let dark = true;

themeButton.addEventListener('click', () => {
    dark = !dark;
    document.documentElement.dataset.theme = dark ? '' : 'light';
    themeButton.textContent = dark ? '☽' : '☀';
})