// Находим элементы модального окна
const modal = document.getElementById("td-modal");
const modalImg = document.getElementById("td-modal-img");
const closeBtn = document.querySelector(".td-modal-close");

// Открытие модалки по клику на изображение
document.querySelectorAll(".td-gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Закрытие по крестику
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Закрытие по клику на фон
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

