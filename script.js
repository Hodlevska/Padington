// Знаходимо нашу 3D-модельку
const modelViewer = document.getElementById("my-model");

// Для прикладу зробимо так, щоб вона з'являлася через 1 секунду після завантаження сторінки
// (або сюди ти можеш втулити свій Intersection Observer / маркер, який ми робили минулого разу)
setTimeout(() => {
    modelViewer.classList.add("visible");
    console.log("3D-моделька вилізла поверх картини ахуєнно!");
}, 1000);