/* // Elemento de la persona
const person = document.getElementById("person");

// Tiempo para cambiar los emojis
let stages = [
    { emoji: '😢', time: 0 },  // Persona pobre
    { emoji: '🙂', time: 3000 }, // Persona en transición
    { emoji: '😎', time: 6000 }, // Persona rica
    { emoji: '😎💸', time: 8000 } // Persona millonaria
];

// Función para mover y cambiar la apariencia del personaje
function startTransformation() {
    // Iniciar movimiento de la persona
    person.style.left = "calc(100% - 100px)";

    // Cambiar la apariencia a lo largo del tiempo
    stages.forEach(stage => {
        setTimeout(() => {
            person.textContent = stage.emoji;
        }, stage.time);
    });
}

// Iniciar la animación después de cargar la página
window.onload = startTransformation;
 */

const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});