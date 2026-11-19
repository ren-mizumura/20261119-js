'use strict';
{
    const btnAdv = document.querySelector(".btn-inner-adv");
    const rectAdv = document.querySelector(".btn-rect-adv");

    btnAdv.addEventListener("click", () => {
        rectAdv.classList.remove("active");

        setTimeout(() => {
            rectAdv.classList.add("active");
        }, 10);
    });


    // カスタム
    const customBtn = document.querySelector(".btn-inner-adv-custom");
}