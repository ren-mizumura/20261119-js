'use strict';
{
    // ランダムに変化
    const btnRandom = document.querySelector(".fade-button-random");

    btnRandom.addEventListener("click", () => {
        // toString(16)で16進数変換 16777215でフルカラー
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        
        btnRandom.style.background = randomColor;
    });
}