// Використовуємо Intersection Observer, щоб відстежувати появу елемента на екрані
const markerBox = document.getElementById("paddington-marker");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Якщо елемент з'явився в зоні видимості
        if (entry.isIntersecting) {
            markerBox.classList.add("visible"); // Вилазить текст поверх відео
            console.log("Падінгтон спіймано! Маркер спрацював ахуєнно!");
        } else {
            // Можеш прибирати клас, якщо треба щоб зникало назад при скролі
            markerBox.classList.remove("visible");
        }
    });
}, {
    threshold: 0.3 // Спрацьовує, коли видно хоча б 30% блоку
});

observer.observe(markerBox);